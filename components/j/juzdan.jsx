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
		"content": `<style>.b0r5lmtag {
  cx: 20.753px;
  cy: 13.868px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.928px;
  ry: 1.868px;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.sk8_uzivq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.175 12v12.972c0 1.44-.005 2.892-.277 4.306c-.273 1.415-.831 2.792-1.746 3.905c-.914 1.113-2.173 1.93-3.55 2.355c-1.376.427-2.838.462-4.279.462h-.498");
}
</style><path class="i9clfwm2k"/><path class="sk8_uzivq"/><ellipse class="b0r5lmtag"/>`,
		"fallback": "arcticons:juzdan",
	});
}

export default Component;
