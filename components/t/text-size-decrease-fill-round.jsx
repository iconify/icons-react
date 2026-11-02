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
		"content": `<style>.z4qvdaclo {
  fill: currentColor;
  d: path("M3 4h10a1 1 0 0 1 0 2H9v13a1 1 0 0 1-2 0V6H3a1 1 0 0 1 0-2m12 7h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}
</style><path class="z4qvdaclo"/>`,
		"fallback": "coolicons:text-size-decrease-fill-round",
	});
}

export default Component;
