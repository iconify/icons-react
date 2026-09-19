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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.ypxzvkb6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.957 17v13.913h6.956m9.044-1.653C26.435 30.305 25.217 31 24 31h0a3.49 3.49 0 0 1-3.478-3.478V25.26A3.49 3.49 0 0 1 24 21.783h0a3.49 3.49 0 0 1 3.478 3.478v1.217h-6.956m16.522-4.695L30.087 31m6.957 0l-6.957-9.217");
}
</style><path class="i9clfwm2k"/><path class="ypxzvkb6m"/>`,
		"fallback": "arcticons:lex",
	});
}

export default Component;
