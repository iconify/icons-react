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
		"content": `<style>.g620qibmn {
  d: path("M20 17v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pt73j1ikv {
  d: path("M15 14v6");
}

.sl7vxjbhd {
  d: path("M10 11v9");
}

.xa3jgydgh {
  d: path("M3 12h9");
}

.yam3-1b2z {
  d: path("M5 8v12");
}
</style><g class="nrj6p8qat"><path class="yam3-1b2z"/><path class="sl7vxjbhd"/><path class="pt73j1ikv"/><path class="xa3jgydgh"/><path class="g620qibmn"/></g>`,
		"fallback": "iconmind:top-p-outline-regular",
	});
}

export default Component;
