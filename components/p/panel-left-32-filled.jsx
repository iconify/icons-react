import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jk07_zqin {
  fill: currentColor;
  d: path("M25.5 28a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4h-19A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28zm0-22A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5H12V6z");
}
</style><path class="jk07_zqin"/>`,
		"fallback": "fluent:panel-left-32-filled",
	});
}

export default Component;
