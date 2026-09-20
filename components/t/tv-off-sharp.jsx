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
		"content": `<style>.km2qmw5jf {
  fill: currentColor;
  d: path("M20.767 17.167L7.6 4H21v13.167zM4.81 4.041v1.415L2.161 2.808l.707-.708l18.685 18.685l-.708.707L17.354 18h-2.315v2H9v-2H3V4.04z");
}
</style><path class="km2qmw5jf"/>`,
		"fallback": "material-symbols-light:tv-off-sharp",
	});
}

export default Component;
