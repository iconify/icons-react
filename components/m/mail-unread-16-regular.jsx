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
		"content": `<style>.onfjp74nb {
  fill: currentColor;
  d: path("M14 5.232A2 2 0 1 0 11.063 3a2 2 0 0 0 0 1A2 2 0 0 0 14 5.232M4 3h6.041a3 3 0 0 0 0 1H4a1 1 0 0 0-1 1v.74l5 2.692l3.944-2.123a3 3 0 0 0 2.056.02V11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2M3 6.876V11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6.876L8.237 9.44a.5.5 0 0 1-.474 0z");
}
</style><path class="onfjp74nb"/>`,
		"fallback": "fluent:mail-unread-16-regular",
	});
}

export default Component;
