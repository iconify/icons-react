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
		"content": `<style>.bzn8qr4qv {
  cx: 24px;
  cy: 20.908px;
  rx: 18.5px;
  ry: 14.263px;
}

.i0l0il_kt {
  cx: 24px;
  cy: 27.092px;
  rx: 18.5px;
  ry: 14.263px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><ellipse class="bzn8qr4qv"/><ellipse class="i0l0il_kt"/></g>`,
		"fallback": "arcticons:oppo-community",
	});
}

export default Component;
