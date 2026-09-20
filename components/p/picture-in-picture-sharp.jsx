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
		"content": `<style>.miv0rd35g {
  fill: currentColor;
  d: path("M2 20V4h20v16zm9-7h8V7h-8z");
}
</style><path class="miv0rd35g"/>`,
		"fallback": "material-symbols:picture-in-picture-sharp",
	});
}

export default Component;
