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
		"content": `<style>.y5q0i5ucs {
  fill: currentColor;
  d: path("M2 6.038V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM4 4h8a1 1 0 0 1 1 1v.74L8 8.432L3 5.74V5a1 1 0 0 1 1-1M3 6.876L7.763 9.44a.5.5 0 0 0 .474 0L13 6.876V11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z");
}
</style><path class="y5q0i5ucs"/>`,
		"fallback": "fluent:mail-16-regular",
	});
}

export default Component;
