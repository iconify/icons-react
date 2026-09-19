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
		"content": `<style>.ccv4j8m1l {
  fill: currentColor;
  d: path("M22 3H10v10h12zm-2 8h-8V7h8zM4 12H2v9h11v-2H4z");
}

.t5xepabak {
  fill: currentColor;
  d: path("M8 8H6v9h11v-2H8z");
}
</style><path class="t5xepabak"/><path class="ccv4j8m1l"/>`,
		"fallback": "ic:sharp-dynamic-feed",
	});
}

export default Component;
