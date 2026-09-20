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
		"content": `<style>.lxixb-bng {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3H5v10h-.5A1.5 1.5 0 0 1 3 11.5zM6 13V3h2v10zm5 0H9V3h2z");
}
</style><path class="lxixb-bng"/>`,
		"fallback": "fluent:layout-column-four-focus-right-16-filled",
	});
}

export default Component;
