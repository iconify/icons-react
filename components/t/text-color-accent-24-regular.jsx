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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.njrb65bpb {
  d: path("M4.5 16.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-3z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="njrb65bpb"/></g>`,
		"fallback": "fluent:text-color-accent-24-regular",
	});
}

export default Component;
