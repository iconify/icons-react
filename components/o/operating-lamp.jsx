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
		"content": `<style>.k-bansbzl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 17.25L6.75 21M12 17.25V21m4-3.75L17.25 21");
}

.qo6jfybal {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v4.5M3.25 14a8.75 6.75 0 0 1 17.5 0Z");
}

.r62lgobwa {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 11.25h.01m3.74-1h.01m3.74 1h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="qo6jfybal"/><path class="r62lgobwa"/><path class="k-bansbzl"/></g>`,
		"fallback": "iconoven:operating-lamp",
	});
}

export default Component;
