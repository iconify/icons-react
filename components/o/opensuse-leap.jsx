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
		"content": `<style>.us1umflbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 5.5l14 14l-14 14l-14-14z");
}

.wd2fiznmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38 28.5l-14 14l-14-14");
}
</style><path class="us1umflbw"/><path class="wd2fiznmj"/>`,
		"fallback": "arcticons:opensuse-leap",
	});
}

export default Component;
