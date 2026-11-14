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
		"content": `<style>.dlxe69tct {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.984 3.514l6.187 4.495q1.983 1.442 1.225 3.774l-2.363 7.273q-.757 2.331-3.209 2.332H8.176q-2.452-.001-3.209-2.332l-2.363-7.273q-.758-2.332 1.225-3.774l6.187-4.495q1.984-1.441 3.968 0");
}
</style><path class="dlxe69tct"/>`,
		"fallback": "uix-solid:pentagon",
	});
}

export default Component;
