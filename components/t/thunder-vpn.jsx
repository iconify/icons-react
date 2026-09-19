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
		"content": `<style>.lqvzfjbnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.979 43.5l16.874-21.522H23.805l4.482-9.244h9.548L41.944 4.5H10.165l-4.109 8.234h12.983c-2.485 5.004-4.977 10.004-7.555 14.968l9.888-.067z");
}
</style><path class="lqvzfjbnk"/>`,
		"fallback": "arcticons:thunder-vpn",
	});
}

export default Component;
