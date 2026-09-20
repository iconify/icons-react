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
		"content": `<style>.tv3zqqg-h {
  fill: currentColor;
  d: path("M100 152a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m136-36v60a12 12 0 0 1-12 12h-92v36a4 4 0 0 1-8 0v-36H32a12 12 0 0 1-12-12v-60a56.06 56.06 0 0 1 56-56h80V24a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-28v32h16a56.06 56.06 0 0 1 56 56m-112 64v-64a48 48 0 0 0-96 0v60a4 4 0 0 0 4 4Zm104-64a48.05 48.05 0 0 0-48-48h-16v76a4 4 0 0 1-8 0V68h-51.18A56 56 0 0 1 132 116v64h92a4 4 0 0 0 4-4Z");
}
</style><path class="tv3zqqg-h"/>`,
		"fallback": "ph:mailbox-thin",
	});
}

export default Component;
