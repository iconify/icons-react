import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oewnf9byy {
  fill: currentColor;
  d: path("M6 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1M11 7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h10v14H11zm2.5 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM7 29a1 1 0 1 1-2 0v-2H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1zm20 0a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-2z");
}
</style><path class="oewnf9byy"/>`,
		"fallback": "fluent:mobile-optimized-32-regular",
	});
}

export default Component;
