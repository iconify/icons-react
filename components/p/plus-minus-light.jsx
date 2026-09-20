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
		"content": `<style>.xph699bys {
  fill: currentColor;
  d: path("m204.24 60.24l-144 144a6 6 0 0 1-8.48-8.48l144-144a6 6 0 0 1 8.48 8.48M66 112a6 6 0 0 0 12 0V78h34a6 6 0 0 0 0-12H78V32a6 6 0 0 0-12 0v34H32a6 6 0 0 0 0 12h34Zm158 66h-80a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12");
}
</style><path class="xph699bys"/>`,
		"fallback": "ph:plus-minus-light",
	});
}

export default Component;
