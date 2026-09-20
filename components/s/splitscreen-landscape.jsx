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
		"content": `<style>.zp-x_64_b {
  fill: currentColor;
  d: path("M13.192 15.616h4.424V8.385h-4.424zm-6.807 0h4.423V8.385H6.385zM4.615 19q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="zp-x_64_b"/>`,
		"fallback": "material-symbols-light:splitscreen-landscape",
	});
}

export default Component;
