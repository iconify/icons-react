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
		"content": `<style>.rj8ze1h0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.9 37.51L16.2 17.245L4.5 37.51h39L27.9 10.49L12.3 37.51");
}
</style><path class="rj8ze1h0j"/>`,
		"fallback": "arcticons:maverik-rewards",
	});
}

export default Component;
