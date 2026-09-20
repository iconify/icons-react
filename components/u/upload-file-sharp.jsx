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
		"content": `<style>.ehl285bxr {
  fill: currentColor;
  d: path("M11.5 17.77h1v-4.695l2.1 2.1l.708-.713L12 11.154l-3.308 3.308l.714.707l2.094-2.094zM5 21V3h9.5L19 7.5V21zm9-13h4l-4-4z");
}
</style><path class="ehl285bxr"/>`,
		"fallback": "material-symbols-light:upload-file-sharp",
	});
}

export default Component;
