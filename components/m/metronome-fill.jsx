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
		"content": `<style>.vb93mtb8r {
  fill: currentColor;
  d: path("m187.14 114.84l26.78-29.46a8 8 0 0 0-11.84-10.76l-20.55 22.6l-17.2-54.07A15.94 15.94 0 0 0 149.08 32h-42.17a15.94 15.94 0 0 0-15.25 11.15l-50.91 160A16 16 0 0 0 56 224h144a16 16 0 0 0 15.25-20.85ZM71.27 160l35.64-112h42.17l20 62.9l-44.62 49.1Zm74.81 0l28.62-31.48l10 31.48Z");
}
</style><path class="vb93mtb8r"/>`,
		"fallback": "ph:metronome-fill",
	});
}

export default Component;
