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
		"content": `<style>.dph9brbom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v17h-19Zm0 5.5h19M8.75 3.5V15m6.5-11.5V15M2.5 15h19M12 17.75h6.5");
}
</style><path class="dph9brbom"/>`,
		"fallback": "uix-sharp:subtotal-row",
	});
}

export default Component;
