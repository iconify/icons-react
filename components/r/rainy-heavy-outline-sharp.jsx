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
		"content": `<style>.jtvl7kbup {
  fill: currentColor;
  d: path("M7.55 19.35L.65 5.55l1.8-.875l6.9 13.75zm4.675 0l-6.9-13.8l1.8-.9L14 18.425zm4.675 0L10 5.55l1.775-.9l6.9 13.775zm4.65-.025L14.675 5.55l1.775-.9l6.9 13.8z");
}
</style><path class="jtvl7kbup"/>`,
		"fallback": "material-symbols:rainy-heavy-outline-sharp",
	});
}

export default Component;
