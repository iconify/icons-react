import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lm8qrebjq {
  fill: currentColor;
  d: path("M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4a16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m81.76 168a.13.13 0 0 1-.09 0H46.25L32.08 80H224Z");
}
</style><path class="lm8qrebjq"/>`,
		"fallback": "ph:tote-simple",
	});
}

export default Component;
