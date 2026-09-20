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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.qsk660iju {
  d: path("M3 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-2z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="qsk660iju"/></g>`,
		"fallback": "fluent:text-color-accent-16-regular",
	});
}

export default Component;
