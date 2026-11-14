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
		"content": `<style>.uhv_f-b-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.348 12.884l6.895-8.662l3.535 3.535l-8.662 6.895Zm-4.066 5.834l4.95-4.95m-5.833 4.066l1.767 1.767M14.75 17.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}
</style><path class="uhv_f-b-n"/>`,
		"fallback": "uix-sharp:rounders-bat",
	});
}

export default Component;
