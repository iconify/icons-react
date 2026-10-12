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
		"content": `<style>.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.ogo8abbce {
  d: path("M12 12V8.75M12 12l2.81 1.63M12 12l-2.81 1.63");
}

.v90gbqbox {
  cx: 12px;
  cy: 12px;
  r: 6px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><circle class="v90gbqbox"/><path class="ogo8abbce"/></g>`,
		"fallback": "iconoven:vault-sharp",
	});
}

export default Component;
