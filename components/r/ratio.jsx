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
		"content": `<style>.eo2gzq77z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 6.5l2-2v15m11-13l2-2v15M12 9h.01M12 15h.01");
}
</style><path class="eo2gzq77z"/>`,
		"fallback": "uix-sharp:ratio",
	});
}

export default Component;
