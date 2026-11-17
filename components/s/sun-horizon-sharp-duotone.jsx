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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qenut57ba {
  d: path("M3 19H21");
}

.uu0b0z1_l {
  stroke-opacity: 0.4;
  d: path("M7.5 16V15C7.5 12.515 9.515 10.5 12 10.5C14.485 10.5 16.5 12.515 16.5 15V16M1 15H4.5M19.5 15H23M4.636 7.636L6.282 9.283M19.364 7.636L17.718 9.283M12 7.5V4");
}
</style><g class="gp_8x1bzb"><path class="uu0b0z1_l"/><path class="qenut57ba"/></g>`,
		"fallback": "keyline-icons:sun-horizon-sharp-duotone",
	});
}

export default Component;
