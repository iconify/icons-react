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
		"content": `<style>.evsvr_51t {
  width: 6.75px;
  height: 7.75px;
  x: 13.5px;
  y: 11px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kj_fl4bwe {
  d: path("M4.75 11q.375-4.125 4.5-5.25");
}

.qwky70bif {
  width: 6.75px;
  height: 7.75px;
  x: 3.5px;
  y: 11px;
  rx: 1.75px;
}

.tx51rfb5o {
  d: path("M14.75 11q.375-4.125 4.5-5.25");
}
</style><g class="hntgybcog"><rect class="qwky70bif"/><path class="kj_fl4bwe"/><rect class="evsvr_51t"/><path class="tx51rfb5o"/></g>`,
		"fallback": "iconoven:quote-marks",
	});
}

export default Component;
