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
		"content": `<style>.n071efkrk {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h5.615v1H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423v-5.616h1v5.616q0 .69-.462 1.152T18.384 20zm4.123-5.03l-.708-.709L18.292 5H14V4h6v6h-1V5.708z");
}
</style><path class="n071efkrk"/>`,
		"fallback": "material-symbols-light:open-in-new-outline",
	});
}

export default Component;
