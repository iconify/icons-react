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
		"content": `<style>.iq2c_-bkw {
  fill: currentColor;
  d: path("M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3zm2-6h2v3H5zm17 1l-3-1.01V2h-5v6l-3 1.01V22h11zm-6-5h1v1h-1zm-3 6.44l3-.98V7h1v2.46l3 .98V12h-7zM20 20h-7v-2h7z");
}
</style><path class="iq2c_-bkw"/>`,
		"fallback": "ic:sharp-liquor",
	});
}

export default Component;
