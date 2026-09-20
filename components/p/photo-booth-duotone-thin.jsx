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
		"content": `<style>.gl2wyfu4j {
  fill: currentColor;
  d: path("M14 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.guo-qbwvt {
  d: path("M8 3v13c0 2 4 2 4 0V3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q686vz2zk {
  d: path("M14 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.uk66x15py {
  d: path("M4 3v18h16V3Z");
}

.x5ujzyh2u {
  fill: currentColor;
  d: path("M4 3v18h16V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="x5ujzyh2u"/><path class="gl2wyfu4j"/><path class="uk66x15py"/><path class="guo-qbwvt"/><path class="q686vz2zk"/></g>`,
		"fallback": "iconmind:photo-booth-duotone-thin",
	});
}

export default Component;
