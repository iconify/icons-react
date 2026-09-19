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
		"content": `<style>.celeutb3k {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-11 9H3V5h9z");
}
</style><path class="celeutb3k"/>`,
		"fallback": "ic:sharp-featured-video",
	});
}

export default Component;
