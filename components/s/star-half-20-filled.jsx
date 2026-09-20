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
		"content": `<style>.wsicb_1hq {
  fill: currentColor;
  d: path("M10 2.342a.99.99 0 0 0-.896.557l-1.93 3.912l-4.317.627a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1 1 0 0 0 1.451 1.054l3.86-2.03z");
}
</style><path class="wsicb_1hq"/>`,
		"fallback": "fluent:star-half-20-filled",
	});
}

export default Component;
