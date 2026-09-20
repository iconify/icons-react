import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tq6njl-vf {
  fill: currentColor;
  d: path("M8 6h4V2H8zM7 2H3.5a.5.5 0 0 0-.5.5V4a2 2 0 0 0 2 2h2zm6 4h2a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5H13zm4 11.5a.5.5 0 0 1-.5.5H13v-4h2a2 2 0 0 1 2 2zM12 14v4H8v-4zm-8.5 4H7v-4H5a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 .5.5m-1-8.5h15.005a.5.5 0 1 1 0 1H2.5a.5.5 0 0 1 0-1");
}
</style><path class="tq6njl-vf"/>`,
		"fallback": "fluent:table-split-20-filled",
	});
}

export default Component;
