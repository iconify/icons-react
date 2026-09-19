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
		"content": `<style>.qw6a-hfic {
  fill: currentColor;
  d: path("M17 5.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V9h-3c-.55 0-1-.45-1-1s.45-1 1-1h3zM10 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M6 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m1 10h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36zm7 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1");
}
</style><path class="qw6a-hfic"/>`,
		"fallback": "ic:round-multiple-stop",
	});
}

export default Component;
