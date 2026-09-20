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
		"content": `<style>.tcrq8voxt {
  fill: currentColor;
  d: path("m8.85 23.95l-1.4-1.4l4.575-4.575L16.6 22.55l-1.4 1.425l-3.175-3.175zm0-5l-1.4-1.4l4.575-4.575L16.6 17.55l-1.4 1.425l-3.175-3.175zM12.025 11l-4.6-4.6L8.85 4.975l3.175 3.175l3.15-3.175L16.6 6.4zm0-5l-4.6-4.6L8.85-.025l3.175 3.175l3.15-3.175L16.6 1.4z");
}
</style><path class="tcrq8voxt"/>`,
		"fallback": "material-symbols:unfold-less-double-outline",
	});
}

export default Component;
