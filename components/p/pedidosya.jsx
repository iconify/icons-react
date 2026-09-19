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
		"content": `<style>.tgz_crb2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 16.405c-5.21 0-7.601-2.38-6.846-9.97h25.081c6.557.097 11.825 5.939 11.765 12.963s-5.425 13.04-11.983 12.942H17.606l-1.87 6.043c-1.1 3.337-4.015 2.931-10.092 2.931l4.716-18.578h19.78c1.316 0 3.057-.923 3.057-3.342c0-2.204-1.74-2.988-3.054-2.989z");
}
</style><path class="tgz_crb2o"/>`,
		"fallback": "arcticons:pedidosya",
	});
}

export default Component;
