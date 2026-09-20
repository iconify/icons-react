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
		"content": `<style>.ft6kwj6bn {
  fill: currentColor;
  d: path("M144 228a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m76-196H60a12 12 0 0 0 0 24a12 12 0 0 1 0 24H44a12 12 0 0 0 0 24h32a12 12 0 0 1 0 24a12 12 0 0 0 0 24h48a12 12 0 0 1 0 24a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24a12 12 0 0 1 0-24h16a12 12 0 0 0 0-24h-24a12 12 0 0 1 0-24a12 12 0 0 0 0-24a12 12 0 0 1 0-24h56a12 12 0 0 0 0-24");
}
</style><path class="ft6kwj6bn"/>`,
		"fallback": "ph:tornado-fill",
	});
}

export default Component;
