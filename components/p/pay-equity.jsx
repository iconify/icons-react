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
		"content": `<style>.ifm6szudy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM3.5 7h17M12 7v13.5m-3.5 0h7M5.5 7v6M2 13h7a3.5 3.5 0 0 1-7 0Zm16.5-6v6M15 13h7a3.5 3.5 0 0 1-7 0Z");
}
</style><path class="ifm6szudy"/>`,
		"fallback": "uix-sharp:pay-equity",
	});
}

export default Component;
