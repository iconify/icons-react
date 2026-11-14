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
		"content": `<style>.k1-a-ebno {
  d: path("M15.75 21.5h.01m4.24 0h.01");
}

.l0p20rzkd {
  d: path("M14.25 17h7.25c0 1.75-1.5 2.75-3.75 2.75c-2 0-3.5-1-3.5-2.75Z");
}

.m_bo6vxfk {
  d: path("M12.7 20.5H3.5V5h17v9.2M8 3v4m8-4v4M3.5 10h17m-13 3.5h.01m3.74 0h.01M7.5 17.25h.01m3.74 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.we852db8g {
  fill: currentColor;
  d: path("M14.25 16.5c0-1.5 1.25-2.5 3.25-2.5v2.5Z");
}
</style><g class="ulnmmdpxh"><path class="m_bo6vxfk"/><path class="l0p20rzkd"/><path class="we852db8g"/><path class="k1-a-ebno"/></g>`,
		"fallback": "uix-sharp:pregnancy-calendar",
	});
}

export default Component;
