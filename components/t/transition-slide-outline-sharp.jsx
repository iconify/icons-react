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
		"content": `<style>.aohd8lrit {
  fill: currentColor;
  d: path("M1 20V4h6v16zm2-1.975h2V5.975H3zM9 20V4h14v16zm2-1.975h10V5.975H11zm-6 0V5.975zm6 0V5.975z");
}
</style><path class="aohd8lrit"/>`,
		"fallback": "material-symbols:transition-slide-outline-sharp",
	});
}

export default Component;
