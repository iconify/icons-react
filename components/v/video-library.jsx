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
		"content": `<style>.jcx262x8m {
  d: path("M9.5 2.5h12v19h-12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_pehibsy {
  d: path("m13.5 8.5l5 3.5l-5 3.5ZM3 5.5v16m3.5-18v18");
}
</style><g class="ulnmmdpxh"><path class="jcx262x8m"/><path class="v_pehibsy"/></g>`,
		"fallback": "uix-sharp:video-library",
	});
}

export default Component;
