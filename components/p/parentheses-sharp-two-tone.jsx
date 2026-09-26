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
		"content": `<style>.epm1c_bnf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.2956 1.6897L8 2C5.4322 4.6962 4 8.2767 4 12C4 15.7233 5.4322 19.3038 8 22L8.2956 22.3103M15.7044 1.6897L16 2C18.5678 4.6962 20 8.2767 20 12C20 15.7233 18.5678 19.3038 16 22L15.7044 22.3103");
}
</style><path class="epm1c_bnf"/>`,
		"fallback": "keyline-icons:parentheses-sharp-two-tone",
	});
}

export default Component;
