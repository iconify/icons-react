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
		"content": `<style>.d_cfbwhmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h8v6H8Zm4 6v9.5m-9 0h18m-18 3h18M12 6h.01");
}
</style><path class="d_cfbwhmc"/>`,
		"fallback": "uix-sharp:road-weather-sensor",
	});
}

export default Component;
