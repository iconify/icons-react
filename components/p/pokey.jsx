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
		"content": `<style>.b62d_ghsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.98 3.67c-3.34 4.52-14.31 9.58-12.62 11.67c1.59 1.96 14.63-5.56 20.89-6.49m1.24 10.09c-1.49-2.84-1.25-6.5.35-8.3");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fvso7rbqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.278 20l-1.244 13.267l-1.347-1.97l-2.902 6.167l.415-10.053l1.243 1.321zm-1.088-1.347L17.996 34.148v-2.851l-7.877 6.167l8.447-12.8l.052 2.591zm-1.347-.881l-12.127 5.324l1.088-1.749l-6.685 1.089l8.499-5.027l-.415 1.606zM36.7 9.67c-.1 5.87-6.05 12.56-3.16 15.15c2.21 1.98 8.55-7.75 9.93-9.94");
}
</style><path class="fvso7rbqm"/><path class="b62d_ghsl"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:pokey",
	});
}

export default Component;
