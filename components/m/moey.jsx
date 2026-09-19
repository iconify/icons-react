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
		"content": `<style>.bqrnptx7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.316 21.181a3.68 3.68 0 0 1 3.682-3.682h0a3.68 3.68 0 0 1 3.683 3.682v6.076m-7.365-9.758v9.758");
}

.dtviotcjo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.934 17.222v8.95");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.sr17avbro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.68 21.181a3.68 3.68 0 0 1 3.683-3.682h0a3.68 3.68 0 0 1 3.683 3.682v6.076");
}

.tu7u57s8z {
  cx: 32.934px;
  cy: 30.028px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="i9clfwm2k"/><path class="bqrnptx7k"/><path class="sr17avbro"/><circle class="tu7u57s8z"/><path class="dtviotcjo"/>`,
		"fallback": "arcticons:moey",
	});
}

export default Component;
