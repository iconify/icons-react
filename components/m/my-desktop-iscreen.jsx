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
		"content": `<style>.yr7rjy59q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.806 7.614v8.615l7.982-.183V7.064zm0 12.343l19.115-.276v21.662L7.806 40.18zM31.05 6.156v9.279h9.144V5.75zm0 13.373v22.21l9.144.511V19.529z");
}
</style><path class="yr7rjy59q"/>`,
		"fallback": "arcticons:my-desktop-iscreen",
	});
}

export default Component;
