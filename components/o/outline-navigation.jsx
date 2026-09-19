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
		"content": `<style>.wokdjvb0b {
  fill: currentColor;
  d: path("m12 7.27l4.28 10.43l-3.47-1.53l-.81-.36l-.81.36l-3.47 1.53zM12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71z");
}
</style><path class="wokdjvb0b"/>`,
		"fallback": "ic:outline-navigation",
	});
}

export default Component;
