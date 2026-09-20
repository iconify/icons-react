import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.geylnlbnd {
  fill: currentColor;
  d: path("M12 2a3 3 0 0 0-2.951 3.54a2.5 2.5 0 0 0-1.334 4.21A2.5 2.5 0 0 0 9.5 14h1.75v4.69l-3.47-3.47a.75.75 0 0 0-1.06 1.06l4.53 4.53v1.44a.75.75 0 0 0 1.5 0v-1.44l4.53-4.53a.75.75 0 1 0-1.06-1.06l-3.47 3.47V14h1.75a2.5 2.5 0 0 0 1.785-4.25a2.5 2.5 0 0 0-1.334-4.21Q15 5.278 15 5a3 3 0 0 0-3-3");
}
</style><path class="geylnlbnd"/>`,
		"fallback": "fluent:plant-ragweed-24-filled",
	});
}

export default Component;
