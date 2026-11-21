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
		"content": `<style>.c6axa5bvi {
  d: path("M20.5443 13.9716C20.5443 13.9716 17.3067 16.0619 12.0651 16.0619C6.82362 16.0619 3.4563 13.9771 3.4563 13.9771");
}

.gmk_p3kpl {
  d: path("M20.589 13.0532C20.589 17.9944 16.7436 22 12.0001 22C7.25653 22 3.41113 17.9944 3.41113 13.0532C3.41113 9.96156 6.77355 5.83518 9.29075 3.17923C10.7809 1.60692 13.2192 1.60692 14.7094 3.17923C17.2266 5.83518 20.589 9.96156 20.589 13.0532Z");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zx927hbix {
  d: path("M7.64355 10.7595C8.68575 9.27235 9.91823 7.84959 11.0098 6.68835");
}
</style><g class="ipq1z-bjh"><path class="c6axa5bvi"/><path class="gmk_p3kpl"/><path class="zx927hbix"/></g>`,
		"fallback": "solar:opacity-linear",
	});
}

export default Component;
