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
		"content": `<style>.ys9nsw2mn {
  fill: currentColor;
  d: path("m20.775 23.6l-1.6-1.6H2l8.6-8.6l-8.2-8.175L3.8 3.8l18.4 18.4zM22 19.2l-8.6-8.6L22 2z");
}
</style><path class="ys9nsw2mn"/>`,
		"fallback": "material-symbols:signal-cellular-off",
	});
}

export default Component;
