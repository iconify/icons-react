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
		"content": `<style>.b51su3b9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.772 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.753 0 1.475.071 2.153.205M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 8.25V19m-1.75-1.75h2.9m2.85 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm4.75 2l2.25 2.25");
}
</style><path class="b51su3b9u"/>`,
		"fallback": "uix-sharp:patient-search",
	});
}

export default Component;
