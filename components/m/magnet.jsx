import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bwg32w_jt {
  fill: var(--svg-color--f44336, #f44336);
  d: path("M67.76 80.26c-17.11 0-30.86-6.73-30.86-22.95s13.65-22.55 30.86-22.55h26.29V4H67.76C32.94 4 4.65 24.28 4.65 57.51c0 33.24 28.29 53.51 63.11 53.51h26.29V80.26z");
}

.y61-zspqw {
  fill: var(--svg-color--82aec0, #82aec0);
  d: path("M94.05 93.24h29.3V124h-29.3zm0-76.27h29.3v30.76h-29.3z");
}

.zi15f0ybr {
  fill: var(--svg-color--c62828, #c62828);
  d: path("M67.76 93.24c-17.11 0-30.86-6.73-30.86-22.95s13.65-22.55 30.86-22.55h26.29V16.97H67.76c-30.02 0-55.17 15.08-61.54 40.54H4.65v12.97c0 33.24 28.29 53.51 63.11 53.51h26.29V93.24z");
}

.zoqv47b_u {
  fill: var(--svg-color--e0e0e0, #e0e0e0);
  d: path("M94.05 80.26h29.3v30.76h-29.3zm0-76.26h29.3v30.76h-29.3z");
}
</style><path class="zi15f0ybr"/><path class="y61-zspqw"/><path class="bwg32w_jt"/><path class="zoqv47b_u"/>`,
		"fallback": "noto:magnet",
	});
}

export default Component;
