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
		"content": `<style>.bn1axxb9f {
  d: path("M9.5 7h5M13 5.5L14.5 7L13 8.5m1.5 5h-5M11 12l-1.5 1.5L11 15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0phoeaal {
  d: path("M6.5 2.5h11v19h-11Zm-3 19h17");
}
</style><g class="ulnmmdpxh"><path class="v0phoeaal"/><path class="bn1axxb9f"/></g>`,
		"fallback": "uix-sharp:wayfinding-totem",
	});
}

export default Component;
