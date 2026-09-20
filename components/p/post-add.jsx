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
		"content": `<style>.enpz6ojac {
  fill: currentColor;
  d: path("M5.116 20q-.691 0-1.153-.462T3.5 18.384V5.616q0-.691.463-1.153T5.115 4h9.308v1H5.116q-.231 0-.424.192t-.192.424v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423V9.077h1v9.308q0 .69-.462 1.153T17.884 20zM8 16.5v-1h7v1zm0-3v-1h7v1zm0-3v-1h7v1zM17.5 8V6h-2V5h2V3h1v2h2v1h-2v2z");
}
</style><path class="enpz6ojac"/>`,
		"fallback": "material-symbols-light:post-add",
	});
}

export default Component;
