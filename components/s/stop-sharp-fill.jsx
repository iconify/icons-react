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
		"content": `<style>.cv4r938lj {
  fill: currentColor;
  d: path("M5 4L19 4C19.5523 4 20 4.4477 20 5L20 19C20 19.5523 19.5523 20 19 20L5 20C4.4477 20 4 19.5523 4 19L4 5C4 4.4477 4.4477 4 5 4Z");
}
</style><path class="cv4r938lj"/>`,
		"fallback": "keyline-icons:stop-sharp-fill",
	});
}

export default Component;
