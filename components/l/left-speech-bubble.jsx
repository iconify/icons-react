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
		"content": `<style>.taxctj4av {
  fill: var(--svg-color--fff, #fff);
  stroke: var(--svg-color--000, #000);
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-width: var(--svg-stroke-width--6px, 6px);
  d: path("M63.65 8.07c42.66.21 59.94 22.46 60.26 50.15c.18 15.48-9.79 28.84-25.07 36.98c-7.45 5.27 1.42 22.54 8.52 26.95c0 0-25.1-1.71-32.02-19.4c-3.82.56-7.75.85-11.78.85c-33.28 0-60.17-17.68-60.17-45.38S20.58 7.86 63.65 8.07z");
}
</style><path class="taxctj4av"/>`,
		"fallback": "noto:left-speech-bubble",
	});
}

export default Component;
