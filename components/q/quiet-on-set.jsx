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
		"content": `<style>.ic4enj5nw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.4 3.5h13.1v13.1m-3.9 3.9H3.5V7.4m0 1.6h1.6m7.8 0h7.6M8 3.5l.342.94M13.5 3.5l2 5.5m-12-5.5l17 17");
}
</style><path class="ic4enj5nw"/>`,
		"fallback": "uix-sharp:quiet-on-set",
	});
}

export default Component;
