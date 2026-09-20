import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yk2b9g0iz {
  fill: currentColor;
  d: path("M8.5 1A1.5 1.5 0 0 1 10 2.5V4H2V2.5A1.5 1.5 0 0 1 3.5 1zm2 4a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM2 7v1.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5V7z");
}
</style><path class="yk2b9g0iz"/>`,
		"fallback": "fluent:split-horizontal-12-filled",
	});
}

export default Component;
