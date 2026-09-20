import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x9kjgha6y {
  fill: currentColor;
  d: path("M14.707 2.293a1 1 0 0 0-1.414 0l-6.75 6.75a1 1 0 0 0 1.414 1.414L13 5.414V18a1 1 0 1 0 2 0V5.414l5.043 5.043a1 1 0 0 0 1.414-1.414zM4 13a1 1 0 0 1 1 1v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a1 1 0 1 1 2 0v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7a1 1 0 0 1 1-1");
}
</style><path class="x9kjgha6y"/>`,
		"fallback": "fluent:share-ios-28-filled",
	});
}

export default Component;
