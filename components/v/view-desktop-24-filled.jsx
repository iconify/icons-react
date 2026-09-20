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
		"content": `<style>.xhh2jg2-j {
  fill: currentColor;
  d: path("M19.749 3a2.25 2.25 0 0 1 2.245 2.096l.005.154v10.502a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-4.25V20.5h1.751a.75.75 0 0 1 .102 1.494L17.25 22H6.75a.75.75 0 0 1-.102-1.493l.102-.007h1.749v-2.498H4.25a2.25 2.25 0 0 1-2.245-2.096L2 15.752V5.25a2.25 2.25 0 0 1 2.096-2.245L4.25 3zm-5.751 15.002h-4l.001 2.498h4zM18.504 6H9.5a.5.5 0 0 0-.5.5v8.002a.5.5 0 0 0 .5.5h9.004a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5M7.5 6h-2a.5.5 0 0 0-.5.5v8.002a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5");
}
</style><path class="xhh2jg2-j"/>`,
		"fallback": "fluent:view-desktop-24-filled",
	});
}

export default Component;
