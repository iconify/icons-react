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
		"content": `<style>.kygr6obhh {
  fill: currentColor;
  d: path("M21.591 16.488A2.999 2.999 0 0 1 19 21H5a2.999 2.999 0 0 1-2.591-4.512l7-12a3 3 0 0 1 5.182 0Z");
}
</style><path class="kygr6obhh"/>`,
		"fallback": "coolicons:triangle-fill",
	});
}

export default Component;
