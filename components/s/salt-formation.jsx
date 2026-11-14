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
		"content": `<style>.s4w99pbdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 19.5H2.5V8H14v7.2M2.5 8l5-5H19l-5 5m5-5v9.2M18 15v6m-3-3h6");
}
</style><path class="s4w99pbdr"/>`,
		"fallback": "uix-sharp:salt-formation",
	});
}

export default Component;
