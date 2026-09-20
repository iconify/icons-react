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

.ix51aqbzd {
  d: path("M3.5 10a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.mrzdbhb5c {
  d: path("M7 13.5V21");
}

.w8gxvdb9g {
  d: path("M14 8h5");
}

.xbbf36buj {
  d: path("M7 18h4");
}

.y4tlj9bad {
  d: path("M12 5h9v6h-9Z");
}
</style><g class="hntgybcog"><path class="ix51aqbzd"/><path class="mrzdbhb5c"/><path class="xbbf36buj"/><path class="y4tlj9bad"/><path class="w8gxvdb9g"/></g>`,
		"fallback": "iconmind:room-key-outline-thin",
	});
}

export default Component;
