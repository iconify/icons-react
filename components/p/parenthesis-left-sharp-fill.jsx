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
		"content": `<style>.vqp9q5oqs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.2858 1.6897L13.9902 2C11.4224 4.6962 9.9902 8.2767 9.9902 12C9.9902 15.7233 11.4224 19.3038 13.9902 22L14.2858 22.3103");
}
</style><path class="vqp9q5oqs"/>`,
		"fallback": "keyline-icons:parenthesis-left-sharp-fill",
	});
}

export default Component;
