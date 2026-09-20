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
		"content": `<style>.jt16vsb-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.9 5.5v37m7.4-37v37m7.4-37v37m7.4-37v37m7.4-29.6h-37m37 7.4h-37m37 7.4h-37m37 7.4h-37m29.6 7.4H5.5v-37h37v29.6");
}
</style><path class="jt16vsb-q"/>`,
		"fallback": "arcticons:rembrandtadvent",
	});
}

export default Component;
