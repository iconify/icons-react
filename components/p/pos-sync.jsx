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
		"content": `<style>.e3vcbdc-g {
  d: path("m21.5 15.25l-.5 2l-2-.5m-2.75 4.281a3.5 3.5 0 0 1 .553-6.32");
}

.ldeawkb1j {
  d: path("m14.5 20.75l.5-2l2 .5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgiqegemw {
  d: path("M14.9 12.5H2.5v-10H17v9.2m-8.25.8V19m2.65 2.5H4.5V19h7.2M5.5 6h5m-5 3.25H8m3 0h3m5.75 5.719a3.5 3.5 0 0 1-.553 6.32");
}
</style><g class="ulnmmdpxh"><path class="wgiqegemw"/><path class="e3vcbdc-g"/><path class="ldeawkb1j"/></g>`,
		"fallback": "uix-sharp:pos-sync",
	});
}

export default Component;
