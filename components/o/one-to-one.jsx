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
		"content": `<style>.bj_jm--sd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-3.75 3.75-3.75q3.354 0 3.708 3h5.584q.354-3 3.708-3q3.75 0 3.75 3.75t-3.75 3.75q-3.354 0-3.708-3H9.208q-.354 3-3.708 3q-3.75 0-3.75-3.75");
}
</style><path class="bj_jm--sd"/>`,
		"fallback": "uix-solid:one-to-one",
	});
}

export default Component;
