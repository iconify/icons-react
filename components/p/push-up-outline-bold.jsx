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
		"content": `<style>.a3zqh3bcj {
  d: path("M2 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bod4n0b3z {
  d: path("M2 18h20");
}

.hpmnlabtt {
  d: path("M6 9h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yg08zkbcc {
  d: path("M8 9v7");
}

.zmo9x5bsa {
  d: path("M18 9v7");
}
</style><g class="s0phu2bbs"><path class="a3zqh3bcj"/><path class="hpmnlabtt"/><path class="yg08zkbcc"/><path class="zmo9x5bsa"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:push-up-outline-bold",
	});
}

export default Component;
