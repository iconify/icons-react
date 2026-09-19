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
		"content": `<style>.aldvl03-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.991 4.5l-11.664 7.573L35.99 18.13l-11.663 6.8l11.663 6.84l-11.663-.246l8.208 8.434m-8.209-8.434l-8.52 8.764");
}

.fa-llob3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.009 31.602a11.99 11.99 0 0 0 23.981 0V4.5H24.326v27.026");
}
</style><path class="fa-llob3s"/><path class="aldvl03-z"/>`,
		"fallback": "arcticons:jada",
	});
}

export default Component;
