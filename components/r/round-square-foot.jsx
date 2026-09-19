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
		"content": `<style>.lgjj1zb1q {
  fill: currentColor;
  d: path("m17.66 17.66l-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71l-1.94-1.94l-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71l-1.94-1.94l-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71L9.7 9.7l-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71l-1.94-1.94l-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71l-1.49-1.49a.5.5 0 0 0-.85.36V18c0 1.1.9 2 2 2h12.79c.45 0 .67-.54.35-.85zM7 16v-4.76L12.76 17H8c-.55 0-1-.45-1-1");
}
</style><path class="lgjj1zb1q"/>`,
		"fallback": "ic:round-square-foot",
	});
}

export default Component;
