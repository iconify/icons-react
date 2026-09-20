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
		"content": `<style>.kmljfqy1g {
  fill: currentColor;
  d: path("M192 52H64a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4Zm40-136v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0M28 56v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0");
}
</style><path class="kmljfqy1g"/>`,
		"fallback": "ph:slideshow-thin",
	});
}

export default Component;
