import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aqfu1bwll {
  fill: currentColor;
  d: path("M16.977 13.842A1.75 1.75 0 0 0 18 12.25v-1.213a2.5 2.5 0 0 0-1.856-2.416l-2.093-.558l-1.542-2.777A2.5 2.5 0 0 0 10.323 4H6.942A2.5 2.5 0 0 0 4.57 5.71l-.823 2.468A2.5 2.5 0 0 0 2 10.562v1.688c0 .707.42 1.316 1.023 1.592A2.5 2.5 0 0 0 7.95 14h4.1a2.5 2.5 0 0 0 4.927-.158M6.942 5H8v3H4.86l.658-1.974A1.5 1.5 0 0 1 6.942 5m4.692.772L12.873 8H9V5h1.323a1.5 1.5 0 0 1 1.311.772M4 13.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m9 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0");
}
</style><path class="aqfu1bwll"/>`,
		"fallback": "fluent:vehicle-car-profile-20-filled",
	});
}

export default Component;
