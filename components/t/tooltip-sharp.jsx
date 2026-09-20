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
		"content": `<style>.yey0pshjj {
  fill: currentColor;
  d: path("m12 22l-2.675-4H2V2h20v16h-7.325z");
}
</style><path class="yey0pshjj"/>`,
		"fallback": "material-symbols:tooltip-sharp",
	});
}

export default Component;
