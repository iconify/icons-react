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
		"content": `<style>.fjvdmacgw {
  fill: currentColor;
  d: path("M2 9.25A7.25 7.25 0 0 1 9.25 2h3.5a3.25 3.25 0 0 1 3 2h-1.775c-.316-.31-.748-.5-1.225-.5h-3.5A5.75 5.75 0 0 0 3.5 9.25v3.5c0 .477.19.91.5 1.225v1.775a3.25 3.25 0 0 1-2-3zm3 1C5 7.35 7.35 5 10.25 5h5.5a3.25 3.25 0 0 1 3 2h-1.775c-.316-.31-.748-.5-1.225-.5h-5.5a3.75 3.75 0 0 0-3.75 3.75v5.5c0 .477.19.91.5 1.225v1.775a3.25 3.25 0 0 1-2-3zM11.25 8A3.25 3.25 0 0 0 8 11.25v7.5A3.25 3.25 0 0 0 11.25 22h7.5A3.25 3.25 0 0 0 22 18.75v-7.5A3.25 3.25 0 0 0 18.75 8zM9.5 11.25c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75z");
}
</style><path class="fjvdmacgw"/>`,
		"fallback": "fluent:tabs-24-regular",
	});
}

export default Component;
