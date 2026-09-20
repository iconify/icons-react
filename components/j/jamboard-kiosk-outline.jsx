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
		"content": `<style>.xebmxacnp {
  fill: currentColor;
  d: path("M7 20v-1h4.5v-3H4.616q-.691 0-1.153-.462T3 14.385v-8.77q0-.69.463-1.152T4.615 4h14.77q.69 0 1.152.463T21 5.616v8.769q0 .69-.463 1.153T19.385 16H12.5v3H17v1zm-3-5.615q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423v-8.77q0-.23-.192-.423T19.385 5H4.615q-.23 0-.423.192T4 5.616zm0 0V5v10z");
}
</style><path class="xebmxacnp"/>`,
		"fallback": "material-symbols-light:jamboard-kiosk-outline",
	});
}

export default Component;
