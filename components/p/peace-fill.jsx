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
		"content": `<style>.qe0knubds {
  fill: currentColor;
  d: path("m136 143.37l46 32.2a71.86 71.86 0 0 1-46 24ZM56 128a71.6 71.6 0 0 0 8.81 34.48L120 123.84V56.46A72.08 72.08 0 0 0 56 128m64 71.54v-56.17l-46 32.2a71.86 71.86 0 0 0 46 23.97m16-143.08v67.38l55.19 38.64A72 72 0 0 0 136 56.46M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88");
}
</style><path class="qe0knubds"/>`,
		"fallback": "ph:peace-fill",
	});
}

export default Component;
