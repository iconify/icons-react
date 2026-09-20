import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rgig3pb2f {
  fill: currentColor;
  d: path("M7.998 2a1 1 0 0 1 1 1v4H13a1 1 0 1 1 0 2H8.998v4a1 1 0 1 1-2 0V9H3a1 1 0 1 1 0-2h3.998V3a1 1 0 0 1 1-1m5.71 25.293L9.413 23l4.293-4.293a1 1 0 0 0-1.414-1.414L8 21.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L6.586 23l-4.293 4.293a1 1 0 1 0 1.414 1.414L8 24.414l4.293 4.293a1 1 0 0 0 1.414-1.414M19 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm7-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="rgig3pb2f"/>`,
		"fallback": "fluent:math-symbols-32-regular",
	});
}

export default Component;
