import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.klq9tbc0l {
  fill: currentColor;
  d: path("M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 158a50.06 50.06 0 0 1-50 50h-32a50.06 50.06 0 0 1-50-50V80a50.06 50.06 0 0 1 50-50h32a50.06 50.06 0 0 1 50 50ZM134 64v48a6 6 0 0 1-12 0V64a6 6 0 0 1 12 0");
}
</style><path class="klq9tbc0l"/>`,
		"fallback": "ph:mouse-simple-light",
	});
}

export default Component;
