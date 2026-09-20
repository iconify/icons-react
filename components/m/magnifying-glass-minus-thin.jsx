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
		"content": `<style>.v-fewukkh {
  fill: currentColor;
  d: path("M148 112a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m78.83 114.83a4 4 0 0 1-5.66 0l-52.7-52.7a84.1 84.1 0 1 1 5.66-5.66l52.7 52.7a4 4 0 0 1 0 5.66M112 188a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76");
}
</style><path class="v-fewukkh"/>`,
		"fallback": "ph:magnifying-glass-minus-thin",
	});
}

export default Component;
