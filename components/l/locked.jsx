import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gdwmsnb0w {
  fill: var(--svg-color--ffac33, #ffac33);
  d: path("M32 32a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z");
}

.kuhfyzbzs {
  fill: var(--svg-color--aab8c2, #aab8c2);
  d: path("M18 0C12.477 0 8 4.477 8 10v10h4V10a6 6 0 0 1 12 0v10h4V10c0-5.523-4.477-10-10-10");
}
</style><path class="kuhfyzbzs"/><path class="gdwmsnb0w"/>`,
		"fallback": "twemoji:locked",
	});
}

export default Component;
