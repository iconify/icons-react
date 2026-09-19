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
		"content": `<style>.smjywgqfj {
  fill: currentColor;
  d: path("m5 12l1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z");
}
</style><path class="smjywgqfj"/>`,
		"fallback": "ic:twotone-keyboard-control-key",
	});
}

export default Component;
