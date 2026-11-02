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
		"content": `<style>.z6y-vswyx {
  fill: currentColor;
  d: path("M20 5a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm-3 4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm3 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm-3 4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z");
}
</style><path class="z6y-vswyx"/>`,
		"fallback": "coolicons:text-align-center-fill-sharp",
	});
}

export default Component;
