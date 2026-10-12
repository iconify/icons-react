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
		"content": `<style>.olxklyhgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 20.5l1.97-1.97m3.54-3.54l1.22-1.22m3.54-3.54l1.22-1.22m3.54-3.54L20.5 3.5M5.47 18.53a2.5 2.5 0 0 1 3.54-3.54Zm4.76-4.76a2.5 2.5 0 0 1 3.54-3.54Zm4.76-4.76a2.5 2.5 0 0 1 3.54-3.54Z");
}
</style><path class="olxklyhgt"/>`,
		"fallback": "iconoven:warm-front-sharp",
	});
}

export default Component;
