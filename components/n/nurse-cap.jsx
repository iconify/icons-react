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
		"content": `<style>.a3m97sbra {
  d: path("m5 16.5l.5-8.75c.25-1.1 1-1.75 2.1-1.9C9 5.6 10.5 5.5 12 5.5s3 .1 4.4.35c1.1.15 1.85.8 2.1 1.9l.5 8.75Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jyb33d2du {
  d: path("M11.5 8.5h1q.4 0 .4.4v.8q0 .4.4.4h.8q.4 0 .4.4v1q0 .4-.4.4h-.8q-.4 0-.4.4v.8q0 .4-.4.4h-1q-.4 0-.4-.4v-.8q0-.4-.4-.4h-.8q-.4 0-.4-.4v-1q0-.4.4-.4h.8q.4 0 .4-.4v-.8q0-.4.4-.4");
}

.pqmm80-1e {
  width: 16.5px;
  height: 3.5px;
  x: 3.75px;
  y: 16.5px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="a3m97sbra"/><path class="jyb33d2du"/><rect class="pqmm80-1e"/></g>`,
		"fallback": "iconoven:nurse-cap",
	});
}

export default Component;
