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
		"content": `<style>.jmuwlqb1s {
  fill: currentColor;
  d: path("M9.75 2h3.998a.75.75 0 0 1 .102 1.493l-.102.007H12.5v17h1.246a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743l-.102.007H9.75a.75.75 0 0 1-.102-1.493l.102-.007h1.249v-17H9.75a.75.75 0 0 1-.743-.648L9 2.75a.75.75 0 0 1 .648-.743zm8.496 2.997a3.253 3.253 0 0 1 3.25 3.25l.004 7.504a3.25 3.25 0 0 1-3.064 3.246l-.186.005h-4.745V4.996zm-8.249 0L9.992 19H5.25A3.25 3.25 0 0 1 2 15.751V8.247a3.25 3.25 0 0 1 3.25-3.25z");
}
</style><path class="jmuwlqb1s"/>`,
		"fallback": "fluent:rename-24-filled",
	});
}

export default Component;
