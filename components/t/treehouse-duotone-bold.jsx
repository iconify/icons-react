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
		"content": `<style>.ewcibzbps {
  d: path("M5 14V9l7 -7 7 7v5Z");
}

.f4qft3b0u {
  fill: currentColor;
  d: path("M5 14V9l7 -7 7 7v5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hvp96bbhp {
  d: path("m12 18 4 -4");
}

.qxhe48bjs {
  d: path("M12 14v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ulbp0sbur {
  d: path("m12 18 -4 -4");
}
</style><g class="s0phu2bbs"><path class="f4qft3b0u"/><path class="ewcibzbps"/><path class="qxhe48bjs"/><path class="ulbp0sbur"/><path class="hvp96bbhp"/></g>`,
		"fallback": "iconmind:treehouse-duotone-bold",
	});
}

export default Component;
