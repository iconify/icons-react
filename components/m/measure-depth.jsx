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
		"content": `<style>.jel9cmbzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6C4 4 5.75 4 7.25 6S10.5 8 12 6s3.25-2 4.75 0S20 8 21.5 6M12 2.5V21m0-10.5h3m-3 3h2m-2 3h2.5m-4.25 2.75L12 21l1.75-1.75");
}
</style><path class="jel9cmbzw"/>`,
		"fallback": "uix:measure-depth",
	});
}

export default Component;
