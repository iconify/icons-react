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
		"content": `<style>.e0iy82b2q {
  d: path("M2 4a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.i3ypschyz {
  d: path("M5 15h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oidvfgqrv {
  d: path("M5 11h9");
}

.za8zkd6ab {
  d: path("M5 7h9");
}

.zy07-3bit {
  d: path("M6 21h15V6");
}
</style><g class="nrj6p8qat"><path class="e0iy82b2q"/><path class="zy07-3bit"/><path class="za8zkd6ab"/><path class="oidvfgqrv"/><path class="i3ypschyz"/></g>`,
		"fallback": "iconmind:past-paper-outline-regular",
	});
}

export default Component;
