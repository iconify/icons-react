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
		"content": `<style>.ljez3h06l {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 128a8 8 0 0 1-8 8h-72a8 8 0 0 1-8-8V96H64v32a8 8 0 0 1-16 0V88a8 8 0 0 1 8-8h72a8 8 0 0 1 8 8v72h56v-32a8 8 0 0 1 16 0Z");
}
</style><path class="ljez3h06l"/>`,
		"fallback": "ph:wave-square-fill",
	});
}

export default Component;
