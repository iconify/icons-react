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
		"content": `<style>.lghwtqcvy {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M80 192H64a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 0 16m0-112H64v32a8 8 0 0 1-16 0V80a16 16 0 0 1 16-16h16a8 8 0 0 1 0 16m64 112h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m0-112h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m64 96a16 16 0 0 1-16 16h-16a8 8 0 0 1 0-16h16v-32a8 8 0 0 1 16 0Zm0-64a8 8 0 0 1-16 0V80h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16Z");
}
</style><path class="lghwtqcvy"/>`,
		"fallback": "ph:rectangle-dashed-fill",
	});
}

export default Component;
