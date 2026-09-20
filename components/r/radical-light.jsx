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
		"content": `<style>.nb6db_pvd {
  fill: currentColor;
  d: path("M246 80v24a6 6 0 0 1-12 0V86H132.16L85.62 210.11a6 6 0 0 1-11.24 0l-48-128a6 6 0 1 1 11.24-4.22L80 190.91l42.38-113A6 6 0 0 1 128 74h112a6 6 0 0 1 6 6");
}
</style><path class="nb6db_pvd"/>`,
		"fallback": "ph:radical-light",
	});
}

export default Component;
