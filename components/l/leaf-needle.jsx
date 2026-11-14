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
		"content": `<style>.kdmqg-bey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15v6.5m0-6.5L4.5 4.5M12 15L9.5 2.5M12 15l2.5-12.5M12 15l7.5-10.5");
}
</style><path class="kdmqg-bey"/>`,
		"fallback": "uix-sharp:leaf-needle",
	});
}

export default Component;
