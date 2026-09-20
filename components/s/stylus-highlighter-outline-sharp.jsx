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
		"content": `<style>.ace361ucv {
  fill: currentColor;
  d: path("M7 16V3h2.475L17 6.725V16zm2-2h6V7.975L9 5zm-5 7l1-3h14l1 3zm5-7h6z");
}
</style><path class="ace361ucv"/>`,
		"fallback": "material-symbols:stylus-highlighter-outline-sharp",
	});
}

export default Component;
