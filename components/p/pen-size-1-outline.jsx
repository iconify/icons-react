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
		"content": `<style>.omnxp7bqi {
  fill: currentColor;
  d: path("M4.975 19.025Q4.75 18.8 4.75 18.5t.225-.525l13-13q.225-.225.525-.225t.525.225t.225.525t-.225.525l-13 13q-.225.225-.525.225t-.525-.225");
}
</style><path class="omnxp7bqi"/>`,
		"fallback": "material-symbols:pen-size-1-outline",
	});
}

export default Component;
