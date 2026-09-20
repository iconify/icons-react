import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pbjl--7kk {
  fill: currentColor;
  d: path("M15 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H11zm-.5 7.5c1.33 0 2.55-.472 3.5-1.257V12.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-7A2.5 2.5 0 0 1 4.5 3h1.1a5.5 5.5 0 0 0-.393 1H4.5A1.5 1.5 0 0 0 3 5.5V9h2.5a.5.5 0 0 1 .5.5c0 .052.008.162.032.308c.041.247.115.494.228.718c.308.618.843.974 1.74.974c.692 0 1.168-.212 1.492-.592q.49.091 1.008.092");
}
</style><path class="pbjl--7kk"/>`,
		"fallback": "fluent:mail-inbox-add-16-filled",
	});
}

export default Component;
