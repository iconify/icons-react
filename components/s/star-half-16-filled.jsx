import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ae_5qab2x {
  fill: currentColor;
  d: path("M8 1.6a.89.89 0 0 0-.806.501L5.673 5.183l-3.401.495a.9.9 0 0 0-.5 1.535l2.462 2.399l-.581 3.387a.9.9 0 0 0 1.306.949L8 12.349z");
}
</style><path class="ae_5qab2x"/>`,
		"fallback": "fluent:star-half-16-filled",
	});
}

export default Component;
