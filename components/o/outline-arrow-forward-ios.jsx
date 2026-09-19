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
		"content": `<style>.v240b9bic {
  fill: currentColor;
  d: path("M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z");
}
</style><path class="v240b9bic"/>`,
		"fallback": "ic:outline-arrow-forward-ios",
	});
}

export default Component;
