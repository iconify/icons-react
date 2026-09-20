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
		"content": `<style>.dqufqvteo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.11 31.71a7.81 7.81 0 0 1-6 2.79a7.83 7.83 0 0 1-7.83-7.82v-5.36a7.83 7.83 0 0 1 7.83-7.82a7.8 7.8 0 0 1 6 2.82m-17.56 4.84h9.88m-9.88 5.73h9.88");
}

.huqzdhv0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.52 21.52 0 0 0 5.15 34.36L2.5 45.5l11.14-2.65A21.5 21.5 0 1 0 24 2.5");
}
</style><path class="huqzdhv0p"/><path class="dqufqvteo"/>`,
		"fallback": "arcticons:tikkie",
	});
}

export default Component;
