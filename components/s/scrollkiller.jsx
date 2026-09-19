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
		"content": `<style>.ij3d2-bhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.422 4.5v39h23.156v-39zm0 0l23.156 39m-23.156 0l23.156-39");
}
</style><path class="ij3d2-bhd"/>`,
		"fallback": "arcticons:scrollkiller",
	});
}

export default Component;
