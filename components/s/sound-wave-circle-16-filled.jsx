import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.clsr428zp {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.5 5.5A.5.5 0 0 1 7 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M12 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 1 0m-3 .5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m-4.5 1v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0");
}
</style><path class="clsr428zp"/>`,
		"fallback": "fluent:sound-wave-circle-16-filled",
	});
}

export default Component;
