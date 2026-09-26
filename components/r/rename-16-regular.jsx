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
		"content": `<style>.nxy16niiw {
  fill: currentColor;
  d: path("M9.5 1a.5.5 0 0 1 0 1h-1v12h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V2h-1a.5.5 0 0 1 0-1zm-3 3h-3A1.5 1.5 0 0 0 2 5.5v5A1.5 1.5 0 0 0 3.5 12h3v1h-3A2.5 2.5 0 0 1 1 10.5v-5A2.5 2.5 0 0 1 3.5 3h3zm6-1A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-3v-1h3a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 4h-3V3z");
}
</style><path class="nxy16niiw"/>`,
		"fallback": "fluent:rename-16-regular",
	});
}

export default Component;
