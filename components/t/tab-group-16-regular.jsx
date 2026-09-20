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
		"content": `<style>.bl-jldblw {
  fill: currentColor;
  d: path("M1 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm.266 8a2 2 0 0 0 1.732 1h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.732V9a3 3 0 0 1-3 3zM4.5 6.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="bl-jldblw"/>`,
		"fallback": "fluent:tab-group-16-regular",
	});
}

export default Component;
