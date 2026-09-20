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
		"content": `<style>.qa5halb7a {
  fill: currentColor;
  d: path("M40 86h34.6a30 30 0 0 0 58.8 0H216a6 6 0 0 0 0-12h-82.6a30 30 0 0 0-58.8 0H40a6 6 0 0 0 0 12m64-24a18 18 0 1 1-18 18a18 18 0 0 1 18-18m112 108h-18.6a30 30 0 0 0-58.8 0H40a6 6 0 0 0 0 12h98.6a30 30 0 0 0 58.8 0H216a6 6 0 0 0 0-12m-48 24a18 18 0 1 1 18-18a18 18 0 0 1-18 18");
}
</style><path class="qa5halb7a"/>`,
		"fallback": "ph:sliders-horizontal-light",
	});
}

export default Component;
