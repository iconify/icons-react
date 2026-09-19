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
		"content": `<style>.xgmamqbhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.216 4.5h8.008v39h-8.008zm16.7 21.734c6.002 0 10.868-4.865 10.868-10.867S32.918 4.5 26.916 4.5h-8.691v21.734zm2.757-.385V4.886");
}
</style><path class="xgmamqbhr"/>`,
		"fallback": "arcticons:pachli",
	});
}

export default Component;
