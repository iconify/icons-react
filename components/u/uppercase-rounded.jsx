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
		"content": `<style>.ma06gzber {
  fill: currentColor;
  d: path("M16.893 17.434q-.143-.144-.143-.357v-6.546l-1.746 1.746q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354l2.388-2.388q.243-.242.566-.242t.566.242l2.388 2.388q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16l-1.746-1.746v6.546q0 .214-.143.357t-.357.143t-.357-.143m-10.8-2.817l-.916 2.635q-.061.16-.18.242t-.28.083q-.263 0-.41-.215q-.148-.214-.05-.466l3.374-9.219q.061-.16.196-.245q.134-.086.294-.086h.367q.16 0 .296.086t.197.244l3.428 9.208q.099.25-.058.472t-.419.221q-.162 0-.296-.095t-.196-.255l-.917-2.61zm.344-.907h3.755L8.336 8.487h-.061z");
}
</style><path class="ma06gzber"/>`,
		"fallback": "material-symbols-light:uppercase-rounded",
	});
}

export default Component;
