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
		"content": `<style>.wt3yglncp {
  fill: currentColor;
  d: path("M18.4 20h1.325L20 18.425l-4.875-4.875L13.35 8.2l-3.325.75L9 7.975v-3.35l-.7-.35L4.4 9.5h3zm-5.025 0H15.5l-8.9-8.5H4.05zm-.75 2L.675 11.15L7.7 1.725l3.3 1.65v3.35l3.675-.95l2.2 6.675L22 17.575L21.25 22z");
}
</style><path class="wt3yglncp"/>`,
		"fallback": "material-symbols:steps-outline-sharp",
	});
}

export default Component;
