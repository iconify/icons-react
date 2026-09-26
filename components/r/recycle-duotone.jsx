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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p94z0c4xt {
  stroke-opacity: 0.4;
  d: path("M7.4793 7.4945L9.7855 3.5C10.9402 1.5 13.827 1.5 14.9817 3.5L17.2879 7.4945M13.8086 6.5622L17.2879 7.4945L18.2201 4.0152");
}

.xomkjebmr {
  d: path("M19.2879 10.9586L21.5941 14.953C22.7488 16.953 21.3054 19.453 18.996 19.453L14.3836 19.453M16.9306 16.906L14.3836 19.453L16.9306 22M10.3836 19.453L5.7712 19.453C3.4618 19.453 2.0184 16.953 3.1731 14.953L5.4793 10.9586M6.4116 14.4378L5.4793 10.9586L2 11.8908");
}
</style><g class="nrj6p8qat"><path class="p94z0c4xt"/><path class="xomkjebmr"/></g>`,
		"fallback": "keyline-icons:recycle-duotone",
	});
}

export default Component;
