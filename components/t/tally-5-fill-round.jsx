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
		"content": `<style>.dw5w_lbpr {
  fill: currentColor;
  d: path("m7 13.634l2-1.111V5a1 1 0 0 1 2 0v6.412l2-1.112V5a1 1 0 0 1 2 0v4.189l2-1.111V5a1 1 0 0 1 2 0v1.967l1.514-.841a1 1 0 0 1 .972 1.748L19 9.255V19a1 1 0 0 1-2 0v-8.634l-2 1.111V19a1 1 0 0 1-2 0v-6.412L11 13.7V19a1 1 0 0 1-2 0v-4.189l-2 1.111V19a1 1 0 0 1-2 0v-1.967l-1.514.841a1 1 0 0 1-.972-1.748L5 14.745V5a1 1 0 0 1 2 0Z");
}
</style><path class="dw5w_lbpr"/>`,
		"fallback": "coolicons:tally-5-fill-round",
	});
}

export default Component;
