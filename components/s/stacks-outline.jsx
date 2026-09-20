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
		"content": `<style>.hj8kuqbfv {
  fill: currentColor;
  d: path("M12 14L1 8l11-6l11 6zm0 4L1.575 12.325l2.1-1.15L12 15.725l8.325-4.55l2.1 1.15zm0 4L1.575 16.325l2.1-1.15L12 19.725l8.325-4.55l2.1 1.15zm0-10.275L18.825 8L12 4.275L5.175 8zM12 8");
}
</style><path class="hj8kuqbfv"/>`,
		"fallback": "material-symbols:stacks-outline",
	});
}

export default Component;
