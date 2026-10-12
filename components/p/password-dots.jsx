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
		"content": `<style>.yuqnu3s2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.25v5M3.33 9.5L7.67 12m0-2.5L3.33 12M12 8.25v5M9.83 9.5l4.34 2.5m0-2.5L9.83 12m8.67-3.75v5M16.33 9.5l4.34 2.5m0-2.5L16.33 12M3.25 17.5h17.5");
}
</style><path class="yuqnu3s2c"/>`,
		"fallback": "iconoven:password-dots",
	});
}

export default Component;
