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
		"content": `<style>.e0by60b9x {
  d: path("M2.75 2.75h18.5v13H2.75z");
}

.goe36db5d {
  d: path("M2.75 18h10.5v3.25H2.75z");
}

.slw_hebtl {
  d: path("m10.65 6.88l3.45 1.99l.65.38l-.65.38l-3.45 1.99L10 12V6.5zM2.75 18h18.5v3.25H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e0by60b9x"/><path class="slw_hebtl"/><path class="goe36db5d"/></g>`,
		"fallback": "iconoven:render-video-sharp",
	});
}

export default Component;
