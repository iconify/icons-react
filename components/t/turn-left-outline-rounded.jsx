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
		"content": `<style>.c4e9jgb2v {
  fill: currentColor;
  d: path("m5.916 10.5l1.746 1.746q.14.14.15.344t-.15.364t-.354.16t-.354-.16l-2.388-2.388q-.243-.243-.243-.566t.243-.565l2.388-2.389q.14-.14.344-.15t.364.15t.16.354t-.16.354L5.916 9.5h8.988q.671 0 1.143.472t.472 1.144V18.5q0 .214-.143.357t-.357.143t-.356-.143t-.144-.357v-7.384q0-.27-.173-.443t-.442-.173z");
}
</style><path class="c4e9jgb2v"/>`,
		"fallback": "material-symbols-light:turn-left-outline-rounded",
	});
}

export default Component;
