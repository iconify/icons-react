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
		"content": `<style>.f6_1zbb-z {
  d: path("M10.75 10.75v3.5h2.5v-3.5m4-2.5v-3h-12m2.5-2.5l-2.5 2.5l2.5 2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ye0gskb1f {
  d: path("M3.25 10.75h17.5v10.5H3.25zm0 3.5h17.5");
}
</style><g class="x2cwu0gfd"><path class="ye0gskb1f"/><path class="f6_1zbb-z"/></g>`,
		"fallback": "iconoven:return-box-sharp",
	});
}

export default Component;
