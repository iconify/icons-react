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
		"content": `<style>.dko8yhbii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25V17.5h4.5V13h4.5V8.5h4.5V4h5m-18.5 9.5C4.5 8.25 8 4 13.25 2.75");
}
</style><path class="dko8yhbii"/>`,
		"fallback": "iconoven:quantization-sharp",
	});
}

export default Component;
