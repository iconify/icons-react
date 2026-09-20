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
		"content": `<style>.h-6cjybyu {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h9.116v1H4.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423v-5.116h1v5.116q0 .69-.462 1.152T19.385 19zm4.723-2.644l-.708-.714l4.18-4.161H9.85v-1h4.65v4.65h-1v-2.937zm9.238-6.51q-1.02 0-1.721-.702t-.702-1.721t.702-1.721T18.577 5t1.721.702T21 7.423t-.702 1.721t-1.721.702");
}
</style><path class="h-6cjybyu"/>`,
		"fallback": "material-symbols-light:pin-invoke-outline",
	});
}

export default Component;
