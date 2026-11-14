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
		"content": `<style>.mctnnrnsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.414 3.561l5.313 1.423a5.25 5.25 0 0 1 3.712 6.43l-1.423 5.313a5.25 5.25 0 0 1-6.43 3.712l-5.313-1.423a5.25 5.25 0 0 1-3.712-6.43l1.423-5.313a5.25 5.25 0 0 1 6.43-3.712m-2.242 3.54h.01M12 12h.01m2.818 4.899h.01");
}
</style><path class="mctnnrnsz"/>`,
		"fallback": "uix:random-sample",
	});
}

export default Component;
