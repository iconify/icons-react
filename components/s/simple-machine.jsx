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
		"content": `<style>.yz8v_4b8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19M12 12l-4 7h8ZM4 6h6v6H4Zm15-1.5V9m-2-2l2 2l2-2");
}
</style><path class="yz8v_4b8z"/>`,
		"fallback": "uix-sharp:simple-machine",
	});
}

export default Component;
