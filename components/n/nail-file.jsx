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
		"content": `<style>.pvrzctbid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.97 17.55l2.08-2.08q.71-.71 1.42 0l1.06 1.06q.71.71 0 1.42l-2.08 2.08q-.71.71-1.42 0l-1.06-1.06q-.71-.71 0-1.42m5.34-6.24l7.62-7.62q.88-.88 1.76 0l1.62 1.62q.88.88 0 1.76l-7.62 7.62q-.88.88-1.76 0l-1.62-1.62q-.88-.88 0-1.76m2.94.44L17 7");
}
</style><path class="pvrzctbid"/>`,
		"fallback": "iconoven:nail-file",
	});
}

export default Component;
