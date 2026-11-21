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
		"content": `<style>.zfudgxb1x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 8L2 7L2 4L12 4L12 7L12 8M7 4L7 20M2.5 20L3.5 20L10.5 20L11.5 20M19 20L19 4M15.7071 7.2929L16 7L19 4L22 7L22.2929 7.2929M15.7071 16.7071L16 17L19 20L22 17L22.2929 16.7071");
}
</style><path class="zfudgxb1x"/>`,
		"fallback": "keyline-icons:type-height-sharp",
	});
}

export default Component;
