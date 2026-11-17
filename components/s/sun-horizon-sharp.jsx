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
		"content": `<style>.rtcjb_xkp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 16V15C7.5 12.515 9.515 10.5 12 10.5C14.485 10.5 16.5 12.515 16.5 15V16M1 15H4.5M19.5 15H23M4.636 7.636L6.282 9.283M19.364 7.636L17.718 9.283M12 7.5V4M3 19H21");
}
</style><path class="rtcjb_xkp"/>`,
		"fallback": "keyline-icons:sun-horizon-sharp",
	});
}

export default Component;
