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
		"content": `<style>.ffipo4b5s {
  d: path("M9 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h1j63eveo {
  d: path("M13 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.imsvhcbjm {
  fill: currentColor;
  d: path("M13 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n2xta362x {
  fill: currentColor;
  d: path("M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ve9ccmbqn {
  d: path("M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.wkp4c939u {
  fill: currentColor;
  d: path("M9 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zkgvk4bog {
  d: path("M12 2v3");
}
</style><g class="s0phu2bbs"><path class="n2xta362x"/><path class="wkp4c939u"/><path class="imsvhcbjm"/><path class="ve9ccmbqn"/><path class="ffipo4b5s"/><path class="h1j63eveo"/><path class="zkgvk4bog"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:travel-adapter-duotone-bold",
	});
}

export default Component;
