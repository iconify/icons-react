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
		"content": `<style>.sb0vf9g5e {
  fill: currentColor;
  d: path("M6.036 4.622a9.49 9.49 0 0 1 11.928 0l-3.755 3.755a4.25 4.25 0 0 0-4.418 0ZM4.622 17.964a9.49 9.49 0 0 1 0-11.928l3.755 3.755a4.25 4.25 0 0 0 0 4.418ZM19.378 6.036a9.49 9.49 0 0 1 0 11.928l-3.755-3.755a4.25 4.25 0 0 0 0-4.418Zm-2.126 12.63l.712.712a9.49 9.49 0 0 1-11.928 0l3.755-3.755a4.25 4.25 0 0 0 4.418 0Z");
}
</style><path class="sb0vf9g5e"/>`,
		"fallback": "coolicons:life-buoy-fill-round",
	});
}

export default Component;
