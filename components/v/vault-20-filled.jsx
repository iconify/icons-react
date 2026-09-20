import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qdqcpjb_u {
  fill: currentColor;
  d: path("M12 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m8.854.646a.5.5 0 0 0-.708 0l-.63.63A2 2 0 0 0 12 8c-.37 0-.718.101-1.016.277l-.63-.63a.5.5 0 0 0-.708.707l.63.63A2 2 0 0 0 10 10c0 .37.101.718.277 1.016l-.63.63a.5.5 0 0 0 .707.708l.63-.63a2 2 0 0 0 2.032-.001l.63.63a.5.5 0 0 0 .708-.707l-.63-.63a2 2 0 0 0-.001-2.032l.63-.63a.5.5 0 0 0 0-.708");
}
</style><path class="qdqcpjb_u"/>`,
		"fallback": "fluent:vault-20-filled",
	});
}

export default Component;
