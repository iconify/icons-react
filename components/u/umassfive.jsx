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
		"content": `<style>.vipz4-zul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 20.898l-12.664-2.826l-3.48-11.856l-6.963 9.485l-15.893.353l12.966 9.435L5.913 38.656l16.296-7.063l9.132 10.191l-1.917-15.791z");
}
</style><path class="vipz4-zul"/>`,
		"fallback": "arcticons:umassfive",
	});
}

export default Component;
