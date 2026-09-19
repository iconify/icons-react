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
		"content": `<style>.fytel3bzn {
  d: path("M15.236 10.707v16.547C15.236 38.822 4.5 37.23 4.5 37.23V21.01c0-11.656 10.736-10.303 10.736-10.303m11.602.047v16.547c0 11.568-11.602 9.94-11.602 9.94v-16.22c0-11.656 11.602-10.267 11.602-10.267");
}

.w4d4x4krx {
  cx: 35.169px;
  cy: 28.987px;
  rx: 8.331px;
  ry: 8.354px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="fytel3bzn"/><ellipse class="w4d4x4krx"/></g>`,
		"fallback": "arcticons:llolu",
	});
}

export default Component;
