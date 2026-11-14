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
		"content": `<style>.i2wecq9ws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 17h20M3 17l4.5-9.5h9L21 17M9.25 10.5V14M12 10.5V14m2.75-3.5V14");
}
</style><path class="i2wecq9ws"/>`,
		"fallback": "uix-sharp:raised-crossing",
	});
}

export default Component;
