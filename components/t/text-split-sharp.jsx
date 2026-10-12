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
		"content": `<style>.xc7aorpfn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 7L12 7M3 12L12 12M5 17L12 17M12 3L12 21M15 7L19 7M15 12L21 12M15 17L23 17");
}
</style><path class="xc7aorpfn"/>`,
		"fallback": "keyline-icons:text-split-sharp",
	});
}

export default Component;
