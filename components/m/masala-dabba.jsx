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
		"content": `<style>.abdx7zvuq {
  width: 16px;
  height: 10px;
  x: 4px;
  y: 10px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.d3yh5cbqf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4.5h.01");
}

.ub-9albao {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="d3yh5cbqf"/><path class="ub-9albao"/><rect class="abdx7zvuq"/></g>`,
		"fallback": "iconoven:masala-dabba",
	});
}

export default Component;
