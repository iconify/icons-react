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
		"content": `<style>.yaul05b0e {
  fill: currentColor;
  d: path("M4 18.962V9.798q0-.503.281-.916q.282-.412.744-.593l9.106-3.495q.404-.161.752.082q.348.244.348.67V13h1.692q0-.635.452-1.086q.451-.453 1.085-.453t1.087.452T20 13v5.962q0 .44-.299.739t-.74.299H5.04q-.441 0-.74-.299t-.3-.74M5 19h5v-4.384q0-.667.475-1.141t1.14-.475h2.616V5.804L5.385 9.22q-.174.077-.28.231Q5 9.606 5 9.798zm6 0h3.23v-1.538q0-.31.23-.54t.54-.23t.54.23t.23.54V19H19v-5h-7.384q-.27 0-.443.173t-.173.443zm4-2.5");
}
</style><path class="yaul05b0e"/>`,
		"fallback": "material-symbols-light:villa-outline-rounded",
	});
}

export default Component;
