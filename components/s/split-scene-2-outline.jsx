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
		"content": `<style>.b-xjjz1ei {
  fill: currentColor;
  d: path("M6 21q-.825 0-1.412-.587T4 19v-4h2v4h12v-4h2v4q0 .825-.587 1.413T18 21zm-4-8v-2h2V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v6h2v2zm4-2h12V5H6zm12 8H6zm0-14H6z");
}
</style><path class="b-xjjz1ei"/>`,
		"fallback": "material-symbols:split-scene-2-outline",
	});
}

export default Component;
