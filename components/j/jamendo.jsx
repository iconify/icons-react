import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oq32zfa7u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M24 2a22 22 0 1 0 22 22A22 22 0 0 0 24 2Zm0 35.91A13.72 13.72 0 0 1 10.47 24A13.72 13.72 0 0 1 24 10.09A13.72 13.72 0 0 1 37.53 24A13.72 13.72 0 0 1 24 37.91Z");
}

.vuljaqbzt {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M31.63 24.9L21.05 32a1 1 0 0 1-1.4-.2a1 1 0 0 1-.2-.65V16.82a1 1 0 0 1 1-1a1 1 0 0 1 .64.21l10.58 7.2a1 1 0 0 1 .33 1.35a1.1 1.1 0 0 1-.37.32Z");
}
</style><path class="oq32zfa7u"/><path class="vuljaqbzt"/>`,
		"fallback": "arcticons:jamendo",
	});
}

export default Component;
