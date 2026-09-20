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
		"content": `<style>.g-na0vv1i {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h5v1h-5q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423v-5h1v5q0 .69-.462 1.153T18.384 20zM16 11V8h-3V7h3V4h1v3h3v1h-3v3z");
}
</style><path class="g-na0vv1i"/>`,
		"fallback": "material-symbols-light:new-window",
	});
}

export default Component;
