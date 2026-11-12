import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.duwql7quu {
  fill: currentColor;
  d: path("M4.846 13.366q-.855 0-1.29-.704q-.433-.704-.112-1.462q.477-1.12.847-2.249t.565-1.855q.136-.54.587-.857t1.017-.316h1.31v-.115q0-.349.229-.578T8.577 5h.308q.348 0 .578.23t.23.578v.115h4.538v-.115q0-.349.23-.578q.23-.23.577-.23h.308q.348 0 .578.23t.23.578v.115h2.23q.677 0 1.147.457T20 7.539q0 .655-.347 1.36t-.603 1.292q-.206.467-.432 1.006q-.226.54-.512 1.174q-.198.454-.602.724t-.883.27zM5 14.385h11.621q.977 0 1.625-.605t1.077-1.764L20 10.474v5.91q0 .67-.472 1.143q-.472.472-1.143.472H6.615q-.67 0-1.143-.472Q5 17.056 5 16.385z");
}
</style><path class="duwql7quu"/>`,
		"fallback": "material-symbols-light:print-landscape-long-rounded",
	});
}

export default Component;
