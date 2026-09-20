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
		"content": `<style>.v765l_bue {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M96 128a32 32 0 1 1 32 32a32 32 0 0 1-32-32m88.28-67.6l-28.49 28.5a47.84 47.84 0 0 0-55.58 0L71.72 60.4a87.83 87.83 0 0 1 112.56 0M71.72 195.6l28.49-28.5a47.84 47.84 0 0 0 55.58 0l28.49 28.5a87.83 87.83 0 0 1-112.56 0");
}
</style><path class="v765l_bue"/>`,
		"fallback": "ph:lifebuoy-fill",
	});
}

export default Component;
