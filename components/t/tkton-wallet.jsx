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
		"content": `<style>.s6xoltbao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 18.332h39m-39 0l6.204-11.896h26.591L43.5 18.332L24 41.564zM22.799 6.436l-6.123 11.896m14.648 0L25.201 6.436M24 18.332v23.232");
}
</style><path class="s6xoltbao"/>`,
		"fallback": "arcticons:tkton-wallet",
	});
}

export default Component;
