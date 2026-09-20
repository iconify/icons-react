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
		"content": `<style>.nhowpccxj {
  fill: currentColor;
  d: path("M54 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m34-70a6 6 0 0 0-6 6v192a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m40 32a6 6 0 0 0-6 6v128a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m40 32a6 6 0 0 0-6 6v64a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6m40-16a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6");
}
</style><path class="nhowpccxj"/>`,
		"fallback": "ph:waveform-light",
	});
}

export default Component;
