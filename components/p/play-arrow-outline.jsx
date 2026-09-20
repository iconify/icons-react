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
		"content": `<style>.afg8anjae {
  fill: currentColor;
  d: path("M8 19V5l11 7zm2-3.65L15.25 12L10 8.65z");
}
</style><path class="afg8anjae"/>`,
		"fallback": "material-symbols:play-arrow-outline",
	});
}

export default Component;
