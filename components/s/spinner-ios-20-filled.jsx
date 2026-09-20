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
		"content": `<style>.ndh18i1yt {
  fill: currentColor;
  d: path("M10 3.5A6.5 6.5 0 0 0 3.5 10A.75.75 0 0 1 2 10a8 8 0 1 1 8 8a.75.75 0 0 1 0-1.5a6.5 6.5 0 1 0 0-13");
}
</style><path class="ndh18i1yt"/>`,
		"fallback": "fluent:spinner-ios-20-filled",
	});
}

export default Component;
