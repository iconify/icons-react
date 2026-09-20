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
		"content": `<style>.b9e7op5tz {
  d: path("M3 7.5h4.5V12H3Z");
}

.cvlwadsxk {
  fill: currentColor;
  d: path("M10 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.exre5jj_d {
  d: path("m12 15 -4.5 -4.5");
}

.g2aaxgb5s {
  d: path("M15.5 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hheigfx4d {
  fill: currentColor;
  d: path("M3 7.5h4.5V12H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hsnod820c {
  fill: currentColor;
  d: path("M15.5 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ib0uz7xmw {
  d: path("M10 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.jhjyblmry {
  d: path("m12 12 4.5 -4.5");
}

.m_6avib3e {
  d: path("M12 3v17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cvlwadsxk"/><path class="hsnod820c"/><path class="hheigfx4d"/><path class="m_6avib3e"/><path class="ib0uz7xmw"/><path class="jhjyblmry"/><path class="g2aaxgb5s"/><path class="exre5jj_d"/><path class="b9e7op5tz"/></g>`,
		"fallback": "iconmind:usb-duotone-regular",
	});
}

export default Component;
