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
		"content": `<style>.kd4i3ghav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.52 5.78l5.87 1.25l1.96.41l-.42 1.96l-2.08 9.78l-.41 1.96l-1.96-.42l-5.87-1.25l-1.96-.41l.42-1.96l2.08-9.78l.41-1.96zm8.23-1.53l.75-1.5m1 3.75l1.5-.75m-5.5-2l.25-1");
}
</style><path class="kd4i3ghav"/>`,
		"fallback": "iconoven:referee-card-sharp",
	});
}

export default Component;
