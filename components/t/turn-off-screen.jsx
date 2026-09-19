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
		"content": `<style>.ghpkh_b3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.611 11.744c6.257 8.936 4.83 21.141-3.318 28.393s-20.437 7.252-28.586 0S.132 20.68 6.39 11.744M24 5.083v22.394");
}
</style><path class="ghpkh_b3m"/>`,
		"fallback": "arcticons:turn-off-screen",
	});
}

export default Component;
