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
		"content": `<style>.vei2spatp {
  fill: currentColor;
  d: path("M204 56v32a4 4 0 0 1-8 0V60h-64v136h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28V60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4");
}
</style><path class="vei2spatp"/>`,
		"fallback": "ph:text-t-thin",
	});
}

export default Component;
