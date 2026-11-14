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
		"content": `<style>.a_i26hy2g {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M6.5 20.5v-5h4v5M15 15l6 6m0-6l-6 6");
}

.mk5abbcej {
  d: path("m3 9l1.5-5h15L21 9m-1.5 2v1.5M4.5 11v9.5h7.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mk5abbcej"/><path class="a_i26hy2g"/></g>`,
		"fallback": "uix-sharp:store-x",
	});
}

export default Component;
