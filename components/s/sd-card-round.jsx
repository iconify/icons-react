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
		"content": `<style>.g8crl7bgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 12v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8c0-.64.36-1.36 1-2l2-2c.64-.64 1.36-1 2-1h5a4 4 0 0 1 4 4zm-9-5v3m3-3v3m3-3v3");
}
</style><path class="g8crl7bgw"/>`,
		"fallback": "coolicons:sd-card-round",
	});
}

export default Component;
