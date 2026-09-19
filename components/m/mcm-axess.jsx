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
		"content": `<style>.ixijtj9ur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 6.546l19 32.908H5zm0 0v21.939m19 10.969L24 28.485M5 39.454l19-10.969");
}
</style><path class="ixijtj9ur"/>`,
		"fallback": "arcticons:mcm-axess",
	});
}

export default Component;
