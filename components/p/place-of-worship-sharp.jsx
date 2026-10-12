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
		"content": `<style>.ej4_3wbll {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h.01");
}

.hzol_-frc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 20.5V11l.58-.47l4.34-3.56l.58-.47l.58.47l4.34 3.56l.58.47v10.25h-11z");
}

.jy4vqubkj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 21.25v-4h3v4m-1.5-9.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5Zm-9.25 9.5h18.5M12 6.5V4");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="hzol_-frc"/><path class="jy4vqubkj"/><path class="ej4_3wbll"/></g>`,
		"fallback": "iconoven:place-of-worship-sharp",
	});
}

export default Component;
