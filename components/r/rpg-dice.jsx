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
		"content": `<style>.r4anzbchn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.729 34.984l10.61-16.8l-17.151-6.97L8.773 9.316l1.48 19.815L18.89 44.5z");
}

.skja7ccbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.227 38.684l5.111-20.5L29.111 3.5L8.773 9.316l-5.111 20.5L18.889 44.5z");
}

.zl9a85t4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.729 34.984L10.254 29.13l16.934-17.916zm-6.541-23.77L29.111 3.5m4.618 31.484l5.498 3.7M10.254 29.13l-6.592.685");
}
</style><path class="skja7ccbo"/><path class="r4anzbchn"/><path class="zl9a85t4v"/>`,
		"fallback": "arcticons:rpg-dice",
	});
}

export default Component;
