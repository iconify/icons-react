import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vhe3ubbeg {
  fill: currentColor;
  d: path("M2 22L22 2v6h-2V6.825L6.825 20H18v2zm18.288-.288Q20 21.426 20 21t.288-.712T21 20t.713.288T22 21t-.288.713T21 22t-.712-.288M20 18v-8h2v8z");
}
</style><path class="vhe3ubbeg"/>`,
		"fallback": "material-symbols:signal-cellular-connected-no-internet-0-bar",
	});
}

export default Component;
