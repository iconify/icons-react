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
		"content": `<style>.f_ufxvwmy {
  fill: currentColor;
  d: path("m17.66 17.66l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L9.7 9.7l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L4 4v16h16zM7 17v-5.76L12.76 17z");
}
</style><path class="f_ufxvwmy"/>`,
		"fallback": "ic:sharp-square-foot",
	});
}

export default Component;
