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
		"content": `<style>.o71_oroit {
  fill: currentColor;
  d: path("M14 2H4v20h16V8zm-1 13v4h-2v-4H8l4.01-4L16 15zm0-6V3.5L18.5 9z");
}
</style><path class="o71_oroit"/>`,
		"fallback": "ic:sharp-upload-file",
	});
}

export default Component;
