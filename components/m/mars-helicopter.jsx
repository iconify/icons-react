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
		"content": `<style>.b972qrb_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19m-19 3h19M12 3v6M7.5 9h9v6h-9Zm2 6L5 21m9.5-6l4.5 6M2.5 21h19");
}
</style><path class="b972qrb_p"/>`,
		"fallback": "uix-sharp:mars-helicopter",
	});
}

export default Component;
