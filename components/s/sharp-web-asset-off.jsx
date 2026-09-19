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
		"content": `<style>.qr2nt_a1u {
  fill: currentColor;
  d: path("M6.83 4H22v15.17l-2-2V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51L2.1 2.1l19.8 19.8zM15.17 18l-10-10H4v10z");
}
</style><path class="qr2nt_a1u"/>`,
		"fallback": "ic:sharp-web-asset-off",
	});
}

export default Component;
