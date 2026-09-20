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
		"content": `<style>.g1nsi23tx {
  fill: currentColor;
  d: path("M6.616 21q-.691 0-1.153-.462T5 19.385V8.423L10.423 3h6.962q.69 0 1.153.463T19 4.615v14.77q0 .69-.462 1.152T17.384 21zm0-1h10.769q.23 0 .423-.192t.192-.424V4.616q0-.231-.192-.424T17.384 4H10.85L6 8.85v10.535q0 .23.192.423t.423.192M12 16.23q.31 0 .501-.21t.191-.481t-.191-.482t-.501-.21t-.501.21t-.191.482q0 .27.191.481q.192.21.501.21m-.5-2.807h1V8.769h-1zM6.616 20H6h12z");
}
</style><path class="g1nsi23tx"/>`,
		"fallback": "material-symbols-light:sd-card-alert-outline",
	});
}

export default Component;
