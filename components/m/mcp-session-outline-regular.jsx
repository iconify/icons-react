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
		"content": `<style>.b4bbhnb2u {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7l3 -3h4");
}

.m2e5l4bvn {
  d: path("M13 13h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tlav9kbbk {
  d: path("M13.69 9.37a4 4 0 1 1 -3.38 0");
}

.xios20bld {
  d: path("M12 10v3");
}
</style><g class="nrj6p8qat"><path class="b4bbhnb2u"/><path class="tlav9kbbk"/><path class="xios20bld"/><path class="m2e5l4bvn"/></g>`,
		"fallback": "iconmind:mcp-session-outline-regular",
	});
}

export default Component;
