import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":254};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wvidutb2v {
  fill: var(--svg-color--485160, #485160);
  d: path("M128 0c70.695 0 128 56.688 128 126.623s-57.305 126.623-128 126.623S0 196.558 0 126.623S57.305 0 128 0m58.745 68.51c-25.485-25.068-65.8-26.065-90.133-1.994c-43.036 42.574-30.346 117.567-29.82 120.55l.016.091s78.182 13.816 121.952-29.484c24.333-24.07 23.47-64.094-2.015-89.163m-44.059 5.698l12.527 25.495l25.772 12.392l-25.772 12.392l-12.527 25.495l-12.526-25.495l-25.773-12.392l25.773-12.392z");
}
</style><path class="wvidutb2v"/>`,
		"fallback": "logos:mapbox-icon",
	});
}

export default Component;
