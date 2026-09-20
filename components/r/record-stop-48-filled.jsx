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
		"content": `<style>.sfm1dmb8r {
  fill: currentColor;
  d: path("M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-27-9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2z");
}
</style><path class="sfm1dmb8r"/>`,
		"fallback": "fluent:record-stop-48-filled",
	});
}

export default Component;
