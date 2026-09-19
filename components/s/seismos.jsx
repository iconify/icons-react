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
		"content": `<style>.amr45hxtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.47 25.467l4.157-9.665l3.471 6.9H45.5c-2.775-26.936-40.225-26.936-43 0h10.402l2.774-4.136l2.775 5.518l4.167-13.81z");
}

.m1l48_b4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.627 22.702l2.775 4.147h10.955c-4.014 24.868-38.7 24.868-42.714 0h11.651l1.383-2.068l2.774 6.91l4.157-10.473l4.863 12.541z");
}
</style><path class="amr45hxtv"/><path class="m1l48_b4e"/>`,
		"fallback": "arcticons:seismos",
	});
}

export default Component;
