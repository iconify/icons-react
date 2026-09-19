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
		"content": `<style>.eqt0vm0yn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.5v10.8h8.325v-5.55H33.25v19.425h-3.7V42.5h8.95a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4");
}

.tv7tv0blv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.05 29.55H7.5c-1.1 0-2 .9-2 2v8.95c0 1.1.9 2 2 2H22c1.1 0 2-.9 2-2v-8.95c0-1.1-.9-2-2-2h-3.55v-3.7h-7.4zm7.4 0h-7.4");
}
</style><path class="eqt0vm0yn"/><path class="tv7tv0blv"/>`,
		"fallback": "arcticons:privat24-business",
	});
}

export default Component;
