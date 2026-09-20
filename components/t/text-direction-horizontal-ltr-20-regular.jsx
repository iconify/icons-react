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
		"content": `<style>.emx6fgb_i {
  fill: currentColor;
  d: path("M6.5 3a.5.5 0 0 1 .468.324l3 8a.5.5 0 0 1-.936.352L8.029 9H4.972l-1.004 2.676a.5.5 0 0 1-.936-.352l3-8A.5.5 0 0 1 6.5 3m0 1.924L5.347 8h2.307zm8.354-.778a.5.5 0 1 0-.707.708L15.293 6H10.5a.5.5 0 0 0 0 1h4.793l-1.146 1.146a.5.5 0 1 0 .707.708l2-2a.5.5 0 0 0 0-.708zm0 8a.5.5 0 0 0-.707.708L15.293 14H3.5a.5.5 0 0 0 0 1h11.793l-1.146 1.146a.5.5 0 0 0 .707.708l2-2a.5.5 0 0 0 0-.708z");
}
</style><path class="emx6fgb_i"/>`,
		"fallback": "fluent:text-direction-horizontal-ltr-20-regular",
	});
}

export default Component;
