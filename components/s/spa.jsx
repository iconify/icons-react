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
		"content": `<style>.l_ld7wsnp {
  d: path("m10.5 9.75l1.5 1.5l-1.5 1.5");
}

.nfl06b7ml {
  d: path("M2.5 2.5h19v19h-19Zm0 4.5h19");
}

.oo1kzsqpt {
  d: path("M15.5 14.75a3.5 3.5 0 1 1-3.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nfl06b7ml"/><path class="oo1kzsqpt"/><path class="l_ld7wsnp"/></g>`,
		"fallback": "uix-sharp:spa",
	});
}

export default Component;
