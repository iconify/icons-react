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
		"content": `<style>.d_v4kv01r {
  d: path("M2.5 8H16v13.5H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xq0ikof0c {
  d: path("M2.5 8L8 2.5h13.5V16L16 21.5M16 8l5.5-5.5M2.5 8L16 21.5");
}
</style><g class="ulnmmdpxh"><path class="d_v4kv01r"/><path class="xq0ikof0c"/></g>`,
		"fallback": "uix-sharp:scene-mesh",
	});
}

export default Component;
