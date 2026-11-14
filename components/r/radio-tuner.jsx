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
		"content": `<style>.mhuvow97a {
  d: path("M2.5 5.5h19v13h-19Z");
}

.qjs9-d4kc {
  d: path("M13.75 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-8.5-3.5v2m5.5-2v2M8 8.5v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mhuvow97a"/><path class="qjs9-d4kc"/></g>`,
		"fallback": "uix-sharp:radio-tuner",
	});
}

export default Component;
