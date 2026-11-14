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
		"content": `<style>.dmtqbtbtz {
  d: path("M2.5 4.5h19v15h-19Zm3.25 3.25v8.5");
}

.ho3z_ncdn {
  d: path("M15.25 10.25V12L17 13");
}

.o2atdt6sv {
  d: path("M5.75 7.75h.75a2.25 2.25 0 0 1 0 4.5h-.75m6-.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dmtqbtbtz"/><path class="o2atdt6sv"/><path class="ho3z_ncdn"/></g>`,
		"fallback": "uix-sharp:parking-disc",
	});
}

export default Component;
