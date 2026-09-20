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
		"content": `<style>.rxc536b5v {
  fill: currentColor;
  d: path("M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm10 1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M12 10a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1z");
}
</style><path class="rxc536b5v"/>`,
		"fallback": "fluent:share-screen-person-overlay-inside-20-filled",
	});
}

export default Component;
