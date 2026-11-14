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
		"content": `<style>.afjmqabbu {
  d: path("M22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2C17.5228 2 22 6.4772 22 12Z");
}

.ejqfcpbbw {
  d: path("M9 7H15.25");
}

.hkpkpybts {
  d: path("M9 9.75H15.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uim_zsn6w {
  d: path("M9 7H11.25C12.7688 7 14 8.2312 14 9.75C14 11.2688 12.7688 12.5 11.25 12.5H9L13.75 17.25");
}
</style><g class="hntgybcog"><path class="afjmqabbu"/><path class="uim_zsn6w"/><path class="ejqfcpbbw"/><path class="hkpkpybts"/></g>`,
		"fallback": "solar:rupee-linear",
	});
}

export default Component;
