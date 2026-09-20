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
		"content": `<style>.tauzoqbjf {
  fill: currentColor;
  d: path("M3.72 2.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06L5 4.56v8.69a.75.75 0 0 1-1.5 0V4.56l-.72.72a.75.75 0 0 1-1.06-1.06zm2.828 6.266a.75.75 0 0 1 .966-.438l6 2.25l.104.049a.75.75 0 0 1-.104 1.355l-6 2.25a.75.75 0 0 1-.528-1.404l1.514-.569v-1.96l-1.514-.567a.75.75 0 0 1-.438-.966M10 11.417L11.114 11L10 10.582zm.22-9.197a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v2.69a.75.75 0 0 1-1.5 0V4.56l-.72.72a.75.75 0 0 1-1.06-1.06z");
}
</style><path class="tauzoqbjf"/>`,
		"fallback": "fluent:text-direction-rotate-90-left-16-filled",
	});
}

export default Component;
