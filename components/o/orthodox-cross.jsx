import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f1z93ubrk {
  fill: currentColor;
  d: path("M55 32.001v-7.5H35.68V17h5.521V9.5H35.68V2h-7.36v7.5h-5.519V17h5.519v7.501H9v7.5h19.32v13.437l-7.359-3.125v7.5l7.359 3.125V62h7.36v-5.937l7.361 3.125v-7.5l-7.361-3.125V32.001z");
}
</style><path class="f1z93ubrk"/>`,
		"fallback": "emojione-monotone:orthodox-cross",
	});
}

export default Component;
