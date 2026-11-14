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
		"content": `<style>.htpkuubab {
  d: path("M12 17.5c0 2 .75 3 2.25 4");
}

.n3q3j56tm {
  d: path("M9 7a3.25 3.25 0 1 1 6 0a3.25 3.25 0 1 1 0 6a3.25 3.25 0 1 1-6 0a3.25 3.25 0 1 1 0-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n3q3j56tm"/><path class="htpkuubab"/></g>`,
		"fallback": "uix-sharp:leaf-clover-four",
	});
}

export default Component;
