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
		"content": `<style>.j2afs9b9j {
  fill: currentColor;
  d: path("M72 104a16 16 0 1 1 16 16a16 16 0 0 1-16-16m96 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m68-40v112a36 36 0 0 1-36 36H56a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h60V16a12 12 0 0 1 24 0v28h60a36 36 0 0 1 36 36m-24 0a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12Zm-12 82a30 30 0 0 1-30 30H86a30 30 0 0 1 0-60h84a30 30 0 0 1 30 30m-80-6v12h16v-12Zm-34 12h10v-12H86a6 6 0 0 0 0 12m90-6a6 6 0 0 0-6-6h-10v12h10a6 6 0 0 0 6-6");
}
</style><path class="j2afs9b9j"/>`,
		"fallback": "ph:robot-bold",
	});
}

export default Component;
