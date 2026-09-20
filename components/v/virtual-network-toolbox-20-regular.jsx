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
		"content": `<style>.gdqvxdkyp {
  fill: currentColor;
  d: path("M4.88 6.825a.5.5 0 1 0-.76-.65l-3 3.5a.5.5 0 0 0 0 .65l3 3.5a.5.5 0 1 0 .76-.65L2.159 10zm13.078 4.217a2.5 2.5 0 0 0-.308-.819l.192-.223l-2.722-3.175a.5.5 0 0 1 .76-.65l3 3.5a.5.5 0 0 1 0 .65l-.667.778a3 3 0 0 0-.255-.061M7 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 1v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5m4 4.5h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0z");
}
</style><path class="gdqvxdkyp"/>`,
		"fallback": "fluent:virtual-network-toolbox-20-regular",
	});
}

export default Component;
