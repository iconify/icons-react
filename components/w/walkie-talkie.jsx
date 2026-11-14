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
		"content": `<style>.trleyzbbj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7h11v14.5h-11ZM9 7V2.5m.5 8.5h5m-5 3h5M12 18h.01");
}
</style><path class="trleyzbbj"/>`,
		"fallback": "uix-sharp:walkie-talkie",
	});
}

export default Component;
