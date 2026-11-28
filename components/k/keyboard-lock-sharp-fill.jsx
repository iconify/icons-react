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
		"content": `<style>.a-vre4c1x {
  d: path("M12 20H2V4H22V8M7 16H12M16.5 15V13C16.5 11.8954 17.395 11 18.5 11C19.605 11 20.5 11.8954 20.5 13V15M15 15H22V20H15V15Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zfkxj3qxu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 7H7V9H5V7ZM9 7H11V9H9V7ZM13 7H15V9H13V7ZM5 11H7V13H5V11ZM9 11H11V13H9V11Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="a-vre4c1x"/><path clip-rule="evenodd" class="zfkxj3qxu"/></g>`,
		"fallback": "keyline-icons:keyboard-lock-sharp-fill",
	});
}

export default Component;
