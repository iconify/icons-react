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
		"content": `<style>.npdz8_fvw {
  fill: currentColor;
  d: path("M216 66h-73.52l37.76-37.76a6 6 0 0 0-8.48-8.48L128 63.51L84.24 19.76a6 6 0 1 0-8.48 8.48L113.52 66H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 134a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z");
}
</style><path class="npdz8_fvw"/>`,
		"fallback": "ph:television-simple-light",
	});
}

export default Component;
