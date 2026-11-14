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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i0i2itapz {
  d: path("M9.75 11a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M12 15.5v6");
}

.j0o8opbll {
  d: path("M5.636 17.364a9 9 0 1 1 12.728 0");
}

.ktkubeu1u {
  d: path("M8.465 15.213a5.5 5.5 0 1 1 7.07 0");
}
</style><g class="hntgybcog"><path class="i0i2itapz"/><path class="ktkubeu1u"/><path class="j0o8opbll"/></g>`,
		"fallback": "uix:podcast",
	});
}

export default Component;
