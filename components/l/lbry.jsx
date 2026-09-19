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
		"content": `<style>.ainlq9bym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.9 24.72l14.67 7.21l19.08-11.72v-1.42l-18.06-8.72L4.5 22.51v6l19.07 9.42L43.5 25.71");
}

.qw2dvbc9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.89 28l.61-2.29l-2.29-.6");
}
</style><path class="ainlq9bym"/><path class="qw2dvbc9l"/>`,
		"fallback": "arcticons:lbry",
	});
}

export default Component;
