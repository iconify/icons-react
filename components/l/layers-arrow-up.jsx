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
		"content": `<style>.asrdc_1sz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.2236 4.0528L11.7236 6.3028C12.0921 6.487 12.0921 7.013 11.7236 7.1972L7.2236 9.4472C7.0828 9.5176 6.9172 9.5176 6.7764 9.4472L2.2764 7.1972C1.9079 7.013 1.9079 6.487 2.2764 6.3028L6.7764 4.0528C6.9172 3.9824 7.0828 3.9824 7.2236 4.0528ZM2 12.309L6.7764 14.6972C6.9172 14.7676 7.0828 14.7676 7.2236 14.6972L12 12.309M2 17.559L6.7764 19.9472C6.9172 20.0176 7.0828 20.0176 7.2236 19.9472L12 17.559M16 3H22M19 21V7M16 10L19 7L22 10");
}
</style><path class="asrdc_1sz"/>`,
		"fallback": "keyline-icons:layers-arrow-up",
	});
}

export default Component;
