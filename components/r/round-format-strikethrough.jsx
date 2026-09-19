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
		"content": `<style>.awi0mc8rq {
  fill: currentColor;
  d: path("M12 19c1.1 0 2-.9 2-2v-1h-4v1c0 1.1.9 2 2 2M5 5.5C5 6.33 5.67 7 6.5 7H10v3h4V7h3.5c.83 0 1.5-.67 1.5-1.5S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5M4 14h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1");
}
</style><path class="awi0mc8rq"/>`,
		"fallback": "ic:round-format-strikethrough",
	});
}

export default Component;
