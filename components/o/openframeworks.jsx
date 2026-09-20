import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":135};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q8_nnghpa {
  d: path("M67.49 0c37.237 0 67.492 30.255 67.492 67.49c0 37.237-30.255 67.492-67.491 67.492S0 104.727 0 67.49S30.255 0 67.49 0m128 0v134.982h-58.18V0zm37.237 60.51v34.908h-34.909V60.51zM256 0l-58.182 58.182V0z");
}
</style><path class="q8_nnghpa"/>`,
		"fallback": "logos:openframeworks",
	});
}

export default Component;
