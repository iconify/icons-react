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
		"content": `<style>.xqubysb7c {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 7L6.5 3L12 5L17.5 3L14 7L15.1978 7.3422C18.6322 8.3235 21 11.4626 21 15.0344L21 21L3 21L3 15.0344C3 11.4626 5.3678 8.3235 8.8022 7.3422L10 7ZM10 7L14 7M12 9.1L12 18.9M14.625 10.75L11.025 10.75C10.1275 10.75 9.4 11.4775 9.4 12.375C9.4 13.2725 10.1275 14 11.025 14L12.975 14C13.8725 14 14.6 14.7275 14.6 15.625C14.6 16.5225 13.8725 17.25 12.975 17.25L9.375 17.25");
}
</style><path class="xqubysb7c"/>`,
		"fallback": "keyline-icons:money-bag-dollar-sign-sharp",
	});
}

export default Component;
