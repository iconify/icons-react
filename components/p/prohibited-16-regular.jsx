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
		"content": `<style>.toh0lpxph {
  fill: currentColor;
  d: path("M11.875 3.418a6 6 0 0 0-8.457 8.457zm.707.707l-8.457 8.457a6 6 0 0 0 8.457-8.457M3.05 3.05a7 7 0 1 1 9.9 9.9a7 7 0 0 1-9.9-9.9");
}
</style><path class="toh0lpxph"/>`,
		"fallback": "fluent:prohibited-16-regular",
	});
}

export default Component;
