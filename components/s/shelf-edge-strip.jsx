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
		"content": `<style>.xw_9wcb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19v8h-19Zm2.25 2.75H10m-5.25 2.5H8M12 8v8m2-5.25h5.25M14 13.25h3.25");
}
</style><path class="xw_9wcb5j"/>`,
		"fallback": "uix-sharp:shelf-edge-strip",
	});
}

export default Component;
