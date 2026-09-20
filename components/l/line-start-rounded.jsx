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
		"content": `<style>.n5rlhgbsq {
  fill: currentColor;
  d: path("M4.5 14q-.84 0-1.42-.58t-.58-1.419t.58-1.42T4.5 10q.698 0 1.237.425t.698 1.075H21q.213 0 .356.144t.144.357t-.144.356T21 12.5H6.435q-.16.65-.698 1.075T4.5 14");
}
</style><path class="n5rlhgbsq"/>`,
		"fallback": "material-symbols-light:line-start-rounded",
	});
}

export default Component;
