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
		"content": `<style>.v6z1zmesr {
  fill: currentColor;
  d: path("M5 20v2h5v2l3-3l-3-3v2zm9 0h5v2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 16H7V2h10zm-5-9c1.1 0 2-.9 1.99-2c0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2");
}
</style><path class="v6z1zmesr"/>`,
		"fallback": "ic:outline-camera-rear",
	});
}

export default Component;
