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
		"content": `<style>.d88iclbju {
  fill: currentColor;
  d: path("M60 96v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m28-76a12 12 0 0 0-12 12v192a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m40 32a12 12 0 0 0-12 12v128a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m40 32a12 12 0 0 0-12 12v64a12 12 0 0 0 24 0V96a12 12 0 0 0-12-12m40-16a12 12 0 0 0-12 12v96a12 12 0 0 0 24 0V80a12 12 0 0 0-12-12");
}
</style><path class="d88iclbju"/>`,
		"fallback": "ph:waveform-bold",
	});
}

export default Component;
