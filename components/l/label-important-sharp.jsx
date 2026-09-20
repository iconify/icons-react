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
		"content": `<style>.dq-1kubxi {
  fill: currentColor;
  d: path("m2 20l6-8l-6-8h14l6 8l-6 8z");
}
</style><path class="dq-1kubxi"/>`,
		"fallback": "material-symbols:label-important-sharp",
	});
}

export default Component;
