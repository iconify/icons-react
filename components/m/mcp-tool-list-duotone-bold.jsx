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

.bqch1zgkz {
  d: path("M8 13h9");
}

.mpmvm0b2b {
  fill: currentColor;
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7l3 -3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t2num1ber {
  d: path("M8 9h9");
}

.x_688mbig {
  d: path("M8 17h5");
}
</style><g class="s0phu2bbs"><path class="mpmvm0b2b"/><path class="b4bbhnb2u"/><path class="t2num1ber"/><path class="bqch1zgkz"/><path class="x_688mbig"/></g>`,
		"fallback": "iconmind:mcp-tool-list-duotone-bold",
	});
}

export default Component;
