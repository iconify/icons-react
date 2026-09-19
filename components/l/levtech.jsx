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
		"content": `<style>.mdcyymbfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 7.5L4.5 25L20 40.5zM10.864 31.364L43.5 7.5M11.799 21.725L20 40.5");
}
</style><path class="mdcyymbfq"/>`,
		"fallback": "arcticons:levtech",
	});
}

export default Component;
