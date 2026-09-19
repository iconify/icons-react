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
		"content": `<style>.hn33xspyq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6 16.473h9.385l5.12 15.758h1.222L27.55 14.31l-5.961-1.937L34.84 6.249L42 19.005l-5.961-1.937l-8.02 24.684H14.213z");
}
</style><path class="hn33xspyq"/>`,
		"fallback": "arcticons:velov-officiel",
	});
}

export default Component;
