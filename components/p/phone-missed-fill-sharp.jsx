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
		"content": `<style>.ojfp6jbxu {
  fill: currentColor;
  d: path("m18 4.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L19.414 6l2.293 2.293a.999.999 0 1 1-1.414 1.414L18 7.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414L16.586 6l-2.293-2.293a.999.999 0 1 1 1.414-1.414ZM2 5V3a1 1 0 0 1 1-1h6c.409 0 .777.249.928.629l2 5a1 1 0 0 1-.221 1.078L9.414 11L13 14.586l2.293-2.293a1 1 0 0 1 1.078-.221l5 2c.38.151.629.519.629.928v6a1 1 0 0 1-1 1h-2C9.611 22 2 14.389 2 5");
}
</style><path class="ojfp6jbxu"/>`,
		"fallback": "coolicons:phone-missed-fill-sharp",
	});
}

export default Component;
