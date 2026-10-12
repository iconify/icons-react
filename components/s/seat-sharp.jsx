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
		"content": `<style>.agkem_1dx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.75h5v3.5h-5zm1.25 6h3.5l.26 1.48l.48 2.79l.26 1.48h7.25l.2 1.49l.1.77l.2 1.49H6.5l-.2-1.49l-.85-6.52l-.2-1.49zm1.75 9.5v3m8-3v3");
}
</style><path class="agkem_1dx"/>`,
		"fallback": "iconoven:seat-sharp",
	});
}

export default Component;
