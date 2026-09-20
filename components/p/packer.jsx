import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":413};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o0n8xlfmn {
  fill: var(--svg-color--1daeff, #1daeff);
  d: path("m.357 50.596l135.137 77.266v284.835L.357 335.447");
}

.vassfmi2r {
  fill: var(--svg-color--1d94dd, #1d94dd);
  d: path("M202.395 83.892L55.505.188v58.127l99.887 57.065v174.429l47.01 26.71c29.092 16.6 52.908 6.655 52.908-22.11V166.417c0-28.78-23.816-65.916-52.907-82.525");
}
</style><path class="o0n8xlfmn"/><path class="vassfmi2r"/>`,
		"fallback": "logos:packer",
	});
}

export default Component;
