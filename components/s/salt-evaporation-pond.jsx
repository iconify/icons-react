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
		"content": `<style>.b18l-okbb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.83 12h12.34a1.75 1.75 0 0 1 1.686 1.282l1.528 5.5A1.75 1.75 0 0 1 19.698 21H4.302a1.75 1.75 0 0 1-1.686-2.218l1.528-5.5A1.75 1.75 0 0 1 5.83 12M12 12v9m-8.75-4.5h17.5M10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5.75 6h1.5m9.5 0h1.5m-9.5-3.25L8 2m7.25.75L16 2");
}
</style><path class="b18l-okbb"/>`,
		"fallback": "uix:salt-evaporation-pond",
	});
}

export default Component;
