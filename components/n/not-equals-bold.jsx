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
		"content": `<style>.bbc5w9_4p {
  fill: currentColor;
  d: path("M228 160a12 12 0 0 1-12 12H104.22l-47.34 52.07a12 12 0 0 1-17.76-16.14L71.78 172H40a12 12 0 0 1 0-24h53.6l36.4-40H40a12 12 0 0 1 0-24h111.78l47.34-52.07a12 12 0 0 1 17.76 16.14L184.22 84H216a12 12 0 0 1 0 24h-53.6L126 148h90a12 12 0 0 1 12 12");
}
</style><path class="bbc5w9_4p"/>`,
		"fallback": "ph:not-equals-bold",
	});
}

export default Component;
