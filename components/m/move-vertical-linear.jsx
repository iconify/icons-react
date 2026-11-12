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
		"content": `<style>.q_d_ntx3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.1417 5.99954L12.0001 1.85791L7.85847 5.99954M12.0001 1.85791L12 22.1422M7.85839 18.0005L12 22.1422L16.1416 18.0005");
}
</style><path class="q_d_ntx3z"/>`,
		"fallback": "solar:move-vertical-linear",
	});
}

export default Component;
