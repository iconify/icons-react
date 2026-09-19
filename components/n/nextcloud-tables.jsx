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
		"content": `<style>.c0x-3nbfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.308v29.383h37V9.308zm0 14.224h37m-37 7.58h37m-12.33-15.17v22.75m-12.34-22.75v22.75M5.5 15.942h37");
}
</style><path class="c0x-3nbfk"/>`,
		"fallback": "arcticons:nextcloud-tables",
	});
}

export default Component;
