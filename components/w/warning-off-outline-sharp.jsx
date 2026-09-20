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
		"content": `<style>.rqecq_bzf {
  fill: currentColor;
  d: path("M11.288 17.713Q11 17.425 11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18t-.712-.288M11 15v-4.025l2 2V15zm10.825 3.95l-5.45-5.425L12 6l-1.175 2l-1.45-1.45L12 2zM4.45 19h11.725L8.75 11.575zm16.025 4.3l-2.3-2.3H1l6.3-10.875L.675 3.5L2.1 2.075l19.8 19.8zM13.6 10.775");
}
</style><path class="rqecq_bzf"/>`,
		"fallback": "material-symbols:warning-off-outline-sharp",
	});
}

export default Component;
