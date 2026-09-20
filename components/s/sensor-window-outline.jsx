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
		"content": `<style>.qjraa_00a {
  fill: currentColor;
  d: path("M6.616 20.98q-.691 0-1.153-.462T5 19.366V4.635q0-.69.463-1.153t1.153-.463h10.769q.69 0 1.153.463T19 4.634v14.732q0 .69-.462 1.152t-1.153.463zM6 11.5h4.5v-.77h3v.77H18V4.635q0-.231-.192-.423t-.424-.193H6.616q-.231 0-.424.192T6 4.634zm0 1v6.866q0 .23.192.423t.423.192h10.77q.23 0 .423-.193t.192-.423V12.5zm0 7.48h12z");
}
</style><path class="qjraa_00a"/>`,
		"fallback": "material-symbols-light:sensor-window-outline",
	});
}

export default Component;
