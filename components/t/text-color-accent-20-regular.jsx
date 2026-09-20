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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.g9ffsf90p {
  d: path("M4 13.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-3z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="g9ffsf90p"/></g>`,
		"fallback": "fluent:text-color-accent-20-regular",
	});
}

export default Component;
