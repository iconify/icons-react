import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ufhcibbvp {
  fill: currentColor;
  d: path("M2.249 2C1.559 2 1 2.56 1 3.25v9.495c0 .69.56 1.25 1.249 1.25h.5c.69 0 1.249-.56 1.249-1.25V3.249c0-.69-.56-1.249-1.25-1.249zm3.997 0c-.69 0-1.25.56-1.25 1.25v9.495c0 .69.56 1.25 1.25 1.25h.5a1.25 1.25 0 0 0 1.248-1.25V3.249A1.25 1.25 0 0 0 6.745 2zm5.726 2.777a1.25 1.25 0 0 0-1.571-.713l-.582.204a1.25 1.25 0 0 0-.746 1.645l2.937 7.304c.249.62.94.933 1.571.713l.582-.204a1.25 1.25 0 0 0 .746-1.646z");
}
</style><path class="ufhcibbvp"/>`,
		"fallback": "fluent:library-16-filled",
	});
}

export default Component;
