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
		"content": `<style>.rj39sccxy {
  fill: currentColor;
  d: path("M11 21.248a.75.75 0 0 1-1.493.102l-.007-.102V17h-.746a2.25 2.25 0 0 1-2.245-2.095l-.005-.154v-5.5a2.25 2.25 0 0 1 1.513-2.127V2.747a.75.75 0 0 1 .648-.743l.101-.007h6.501a.75.75 0 0 1 .743.648l.007.102v4.386a2.25 2.25 0 0 1 1.48 1.946l.007.17v5.5a2.25 2.25 0 0 1-2.096 2.246l-.154.005H14.5l.001 4.245a.75.75 0 0 1-1.493.102L13 21.245V17h-2zM15.254 8.5h-6.5a.75.75 0 0 0-.743.648l-.007.102v5.5c0 .38.282.693.648.743l.102.007l4.996-.003l.043.002h1.461a.75.75 0 0 0 .743-.647l.007-.102v-5.5a.75.75 0 0 0-.648-.743zm-.737-5.003H9.516v3.502h5.001z");
}
</style><path class="rj39sccxy"/>`,
		"fallback": "fluent:usb-plug-24-regular",
	});
}

export default Component;
