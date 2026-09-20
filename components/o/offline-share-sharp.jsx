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
		"content": `<style>.cc4blubah {
  fill: currentColor;
  d: path("M5.5 21.385V5.538h1v14.847h9.23v1zM8.885 18V2h10.384v3.723H20v2.9h-.73V18zm2.557-6.038h.885v-1.75h2.689l-1.008 1.007l.627.627l2.077-2.077l-2.077-2.077l-.627.627l1.008 1.008h-3.574z");
}
</style><path class="cc4blubah"/>`,
		"fallback": "material-symbols-light:offline-share-sharp",
	});
}

export default Component;
