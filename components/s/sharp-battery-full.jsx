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
		"content": `<style>.itkj75bfr {
  fill: currentColor;
  d: path("M17 4h-3V2h-4v2H7v18h10z");
}
</style><path class="itkj75bfr"/>`,
		"fallback": "ic:sharp-battery-full",
	});
}

export default Component;
