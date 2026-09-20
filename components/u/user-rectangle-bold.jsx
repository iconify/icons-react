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
		"content": `<style>.u7-i45bko {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-116 92a28 28 0 1 1 28 28a28 28 0 0 1-28-28m28 52a59.66 59.66 0 0 1 40.85 16h-81.7A59.66 59.66 0 0 1 128 180m84 16h-12.44A83.46 83.46 0 0 0 165 164.5a52 52 0 1 0-74 0A83.46 83.46 0 0 0 56.44 196H44V60h168Z");
}
</style><path class="u7-i45bko"/>`,
		"fallback": "ph:user-rectangle-bold",
	});
}

export default Component;
