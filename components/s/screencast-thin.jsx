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
		"content": `<style>.ge-a_ebeo {
  fill: currentColor;
  d: path("M228 56v144a12 12 0 0 1-12 12h-72a4 4 0 0 1 0-8h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v40a4 4 0 0 1-8 0V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12M32 188a4 4 0 0 0 0 8a12 12 0 0 1 12 12a4 4 0 0 0 8 0a20 20 0 0 0-20-20m0-32a4 4 0 0 0 0 8a44.05 44.05 0 0 1 44 44a4 4 0 0 0 8 0a52.06 52.06 0 0 0-52-52m0-32a4 4 0 0 0 0 8a76.08 76.08 0 0 1 76 76a4 4 0 0 0 8 0a84.09 84.09 0 0 0-84-84");
}
</style><path class="ge-a_ebeo"/>`,
		"fallback": "ph:screencast-thin",
	});
}

export default Component;
