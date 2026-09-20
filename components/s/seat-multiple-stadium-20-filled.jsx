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
		"content": `<style>.wrvkc_vku {
  fill: currentColor;
  d: path("M5.5 14a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1 0-3zm6 0a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 1 0-3zm-12-5A2.5 2.5 0 0 1 7 11.5v2.003A2.5 2.5 0 0 0 5.5 13h-2c-.563 0-1.082.188-1.5.503V11.5A2.5 2.5 0 0 1 4.5 9M10 9a2 2 0 0 1 2 2v2.503A2.5 2.5 0 0 0 10.5 13h-1c-.563 0-1.082.188-1.5.503V11a2 2 0 0 1 2-2m5.5 0a2.5 2.5 0 0 1 2.5 2.5v2.003A2.5 2.5 0 0 0 16.5 13h-2c-.563 0-1.082.188-1.5.503V11.5A2.5 2.5 0 0 1 15.5 9M7.25 3A2.25 2.25 0 0 1 9.5 5.25v2.791a3.01 3.01 0 0 0-2.11 1.483A3.5 3.5 0 0 0 6.303 8.5A3.5 3.5 0 0 0 5 8.035V5.25A2.25 2.25 0 0 1 7.25 3m5.5 0A2.25 2.25 0 0 1 15 5.25v2.785a3.5 3.5 0 0 0-1.303.465a3.5 3.5 0 0 0-1.088 1.024a3.1 3.1 0 0 0-.912-.996a3 3 0 0 0-1.197-.487V5.25A2.25 2.25 0 0 1 12.75 3");
}
</style><path class="wrvkc_vku"/>`,
		"fallback": "fluent:seat-multiple-stadium-20-filled",
	});
}

export default Component;
