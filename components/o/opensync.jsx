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
		"content": `<style>.v3bynsbhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.711 29.711a8.077 8.077 0 1 0 0-11.422L18.29 29.71a8.077 8.077 0 1 1 0-11.422");
}
</style><path class="v3bynsbhg"/>`,
		"fallback": "arcticons:opensync",
	});
}

export default Component;
