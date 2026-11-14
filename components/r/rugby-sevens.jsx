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
		"content": `<style>.veqi65bod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5a11 11 0 0 1 11-11a11 11 0 0 1-11 11ZM13 13h8l-5 8.5m-9.5-12l3-3");
}
</style><path class="veqi65bod"/>`,
		"fallback": "uix-sharp:rugby-sevens",
	});
}

export default Component;
