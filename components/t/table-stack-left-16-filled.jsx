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
		"content": `<style>.poar31ida {
  fill: currentColor;
  d: path("M2 13.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zM6 5V2.5a.5.5 0 0 1 .5-.5H10v3zm0 1v4h4V6zm4 8H6.5a.5.5 0 0 1-.5-.5V11h4zm1-3v3h.5a2.5 2.5 0 0 0 2.5-2.5V11zm3-1V6h-3v4zm0-5.5V5h-3V2h.5A2.5 2.5 0 0 1 14 4.5");
}
</style><path class="poar31ida"/>`,
		"fallback": "fluent:table-stack-left-16-filled",
	});
}

export default Component;
