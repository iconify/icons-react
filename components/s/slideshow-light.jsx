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
		"content": `<style>.lwgl98bgj {
  fill: currentColor;
  d: path("M192 50H64a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2Zm44-136v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0M30 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0");
}
</style><path class="lwgl98bgj"/>`,
		"fallback": "ph:slideshow-light",
	});
}

export default Component;
