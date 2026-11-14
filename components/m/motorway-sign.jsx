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
		"content": `<style>.ex51uob0j {
  d: path("M12 11.5v-6M9.5 8L12 5.5L14.5 8");
}

.hjp0op5-z {
  d: path("M2.5 2.5h19v12h-19Zm4.5 12v7m10-7v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hjp0op5-z"/><path class="ex51uob0j"/></g>`,
		"fallback": "uix-sharp:motorway-sign",
	});
}

export default Component;
