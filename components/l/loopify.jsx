import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jwlr4_bnu {
  cx: 14px;
  cy: 14.25px;
  r: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.o7opl6brf {
  cx: 14px;
  cy: 33.75px;
  r: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uw-gybb6f {
  cx: 34px;
  cy: 14.25px;
  r: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vq-r8upje {
  cx: 34px;
  cy: 33.75px;
  r: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="jwlr4_bnu"/><circle class="uw-gybb6f"/><circle class="o7opl6brf"/><circle class="vq-r8upje"/>`,
		"fallback": "arcticons:loopify",
	});
}

export default Component;
