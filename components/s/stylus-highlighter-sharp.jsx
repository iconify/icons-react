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
		"content": `<style>.skts64d7v {
  fill: currentColor;
  d: path("M7 16V3h2.475L17 6.725V16zm-3 5l1-3h14l1 3z");
}
</style><path class="skts64d7v"/>`,
		"fallback": "material-symbols:stylus-highlighter-sharp",
	});
}

export default Component;
