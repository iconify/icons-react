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
		"content": `<style>.w837b73ho {
  fill: currentColor;
  d: path("M8.694 2.04A.5.5 0 0 1 9 2.5v11a.5.5 0 0 1-.85.357l-2.927-2.875H3.5a1.5 1.5 0 0 1-1.5-1.5v-2.99a1.5 1.5 0 0 1 1.5-1.5h1.724l2.927-2.85a.5.5 0 0 1 .543-.103M8 3.684L5.777 5.851a.5.5 0 0 1-.35.142H3.5a.5.5 0 0 0-.5.5v2.989a.5.5 0 0 0 .5.5h1.928a.5.5 0 0 1 .35.143L8 12.308zm2.147 2.461a.5.5 0 0 1 .707 0l1.147 1.147l1.146-1.147a.5.5 0 1 1 .707.708L12.708 8l1.146 1.146a.5.5 0 1 1-.707.708L12 8.707l-1.147 1.147a.5.5 0 0 1-.707-.708L11.293 8l-1.146-1.146a.5.5 0 0 1 0-.708");
}
</style><path class="w837b73ho"/>`,
		"fallback": "fluent:speaker-mute-16-regular",
	});
}

export default Component;
