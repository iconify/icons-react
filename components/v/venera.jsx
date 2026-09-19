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
		"content": `<style>.ccnoxxb5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 7.872L25.897 40.128M5.5 7.872l16.603 32.256M12.036 7.872L24 31.116L35.964 7.872");
}
</style><path class="ccnoxxb5i"/>`,
		"fallback": "arcticons:venera",
	});
}

export default Component;
