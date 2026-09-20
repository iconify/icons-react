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
		"content": `<style>.qum7yib-c {
  fill: currentColor;
  d: path("M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="qum7yib-c"/>`,
		"fallback": "fluent:office-apps-24-filled",
	});
}

export default Component;
