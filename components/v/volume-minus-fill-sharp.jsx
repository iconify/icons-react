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
		"content": `<style>.nnqld5b7m {
  fill: currentColor;
  d: path("M12 4v16a1.002 1.002 0 0 1-1.707.707L6.586 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3.586l3.707-3.707A1 1 0 0 1 12 4m9 7a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2Z");
}
</style><path class="nnqld5b7m"/>`,
		"fallback": "coolicons:volume-minus-fill-sharp",
	});
}

export default Component;
