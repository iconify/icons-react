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
		"content": `<style>.emu6orblz {
  d: path("M2 17V9h8v8");
}

.f0mt8ybxt {
  d: path("M2 13h8");
}

.fbdov315v {
  d: path("m13 10 3 -3h3l3 3Z");
}

.jdh6pf7zv {
  d: path("M17.5 10v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tm05ptb3a {
  d: path("M15.5 19h4");
}
</style><g class="nrj6p8qat"><path class="emu6orblz"/><path class="f0mt8ybxt"/><path class="fbdov315v"/><path class="jdh6pf7zv"/><path class="tm05ptb3a"/></g>`,
		"fallback": "iconmind:living-room-outline-regular",
	});
}

export default Component;
