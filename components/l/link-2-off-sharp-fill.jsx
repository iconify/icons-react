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
		"content": `<style>.rllvkobji {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 17L7 17C4.2386 17 2 14.7614 2 12C2 9.2386 4.2386 7 7 7M14 7L17 7C19.7614 7 22 9.2386 22 12C22 13.2135 21.5677 14.326 20.8488 15.1919L20.21 15.9613M17 17L14 17M7 12L12 12M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="rllvkobji"/>`,
		"fallback": "keyline-icons:link-2-off-sharp-fill",
	});
}

export default Component;
