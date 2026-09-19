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
		"content": `<style>.gu4mwobih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 9.5h39v5.7h-39zm0 9.8V25h16.65v13.5h5.7V25H43.5v-5.7z");
}
</style><path class="gu4mwobih"/>`,
		"fallback": "arcticons:japan-post",
	});
}

export default Component;
