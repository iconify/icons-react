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
		"content": `<style>.dthh0soyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.93 35.359c-5.966 4.83-14.652 4.223-19.888-1.39c-5.235-5.615-5.235-14.323 0-19.937s13.922-6.221 19.887-1.39m.001-.001l2.904-3.587M32.93 35.359l2.904 3.587M25.269 24l13.847-13.846M30.654 24L44.5 10.154m0 27.693L30.654 24m8.462 13.847L25.269 24m13.847-13.846H44.5m0 27.693h-5.384m2.569-20.739L34.5 24l7.185 6.891");
}

.mlk9lobam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.834 38.945c-7.85 6.356-19.279 5.557-26.167-1.83s-6.889-18.844 0-26.231c6.888-7.387 18.317-8.186 26.167-1.83m5.851 8.054a19.23 19.23 0 0 1 0 13.783");
}
</style><path class="mlk9lobam"/><path class="dthh0soyy"/>`,
		"fallback": "arcticons:okash",
	});
}

export default Component;
