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
		"content": `<style>.n2ky8ee1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.636 19.665a7.582 7.582 0 1 0-7.582-7.583");
}

.t0oef-vwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.081 12.485a7.582 7.582 0 0 0-10.027 7.18c0 3.209 2 5.937 4.817 7.044v13.009l2.765 3.782l2.765-3.782v-13.01c2.817-1.106 4.817-3.834 4.817-7.043a7.56 7.56 0 0 0-1.015-3.794M18.144 26.246l-5.643 5.643l-.719 4.63l4.63-.719l5.642-5.643");
}
</style><path class="n2ky8ee1l"/><path class="t0oef-vwm"/>`,
		"fallback": "arcticons:ubs-access",
	});
}

export default Component;
