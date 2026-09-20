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
		"content": `<style>.scox17bag {
  fill: currentColor;
  d: path("M2.786 8.68a1.5 1.5 0 0 0 0 2.638l11.998 6.5A1.5 1.5 0 0 0 17 16.498V3.5a1.5 1.5 0 0 0-2.215-1.32z");
}
</style><path class="scox17bag"/>`,
		"fallback": "fluent:triangle-left-20-filled",
	});
}

export default Component;
