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
		"content": `<style>.v2x4v1brg {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-144a54 54 0 1 0 54 54a54.06 54.06 0 0 0-54-54m0 96a42 42 0 1 1 42-42a42 42 0 0 1-42 42");
}
</style><path class="v2x4v1brg"/>`,
		"fallback": "ph:radio-button-light",
	});
}

export default Component;
