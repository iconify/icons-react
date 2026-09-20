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
		"content": `<style>.dabdom0qa {
  fill: currentColor;
  d: path("M52 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m36-68a4 4 0 0 0-4 4v192a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m40 32a4 4 0 0 0-4 4v128a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m40 32a4 4 0 0 0-4 4v64a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4m40-16a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4");
}
</style><path class="dabdom0qa"/>`,
		"fallback": "ph:waveform-thin",
	});
}

export default Component;
