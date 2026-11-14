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
		"content": `<style>.g-af5hb0x {
  d: path("M2.5 4h19v10.5h-19Zm4 10.5v5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-5m-8 3h5M12 11h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w5uglqbug {
  d: path("M10.586 9.586a2 2 0 0 1 2.828 0M9.172 8.172a4 4 0 0 1 5.656 0");
}
</style><g class="ulnmmdpxh"><path class="g-af5hb0x"/><path class="w5uglqbug"/></g>`,
		"fallback": "uix-sharp:printer-wifi",
	});
}

export default Component;
