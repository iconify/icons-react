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
		"content": `<style>.kq-k0mbwi {
  d: path("M2.5 11h19v4h-19Zm0-4v4M12 8v3m9.5-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x1uvrcbvq {
  fill: currentColor;
  d: path("M2.5 11h4.75v4H2.5Zm9.5 0h4.75v4H12Z");
}
</style><g class="ulnmmdpxh"><path class="kq-k0mbwi"/><path class="x1uvrcbvq"/></g>`,
		"fallback": "uix-sharp:scale-bar",
	});
}

export default Component;
