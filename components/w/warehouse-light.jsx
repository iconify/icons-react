import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g-9uwg17e {
  fill: currentColor;
  d: path("M240 186h-10V56.28l11.26-2.41a6 6 0 1 0-2.52-11.74l-224 48a6 6 0 0 0 2.52 11.74L26 100v86H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 97.42l180-38.57V186h-28v-58a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v58H38ZM178 154H78v-20h100ZM78 166h100v20H78Z");
}
</style><path class="g-9uwg17e"/>`,
		"fallback": "ph:warehouse-light",
	});
}

export default Component;
