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
		"content": `<style>.ec_urro1u {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.75 14.5h.01m4.49 3.5h.01");
}

.hzqapswss {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 2.75h-7a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h9.5a2.5 2.5 0 0 0 2.5-2.5v-11Z");
}

.mugi8qg_w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 2.75v3a2 2 0 0 0 2 2h3m-11 3h7.5m-.25 3.5l-5 4");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="hzqapswss"/><path class="mugi8qg_w"/><path class="ec_urro1u"/></g>`,
		"fallback": "iconoven:tax-form",
	});
}

export default Component;
