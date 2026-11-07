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
		"content": `<style>.vhlfhibbg {
  fill: currentColor;
  d: path("M4 22V6h10v16zm12-4V4h-6V2h10v16z");
}
</style><path class="vhlfhibbg"/>`,
		"fallback": "material-symbols:mirror-stack-sharp",
	});
}

export default Component;
