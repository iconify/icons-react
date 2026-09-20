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
		"content": `<style>.dcasq6b9j {
  fill: currentColor;
  d: path("M11 14h.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2H11zM10 2H6v12h4zM4.5 2H5v12h-.5A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2");
}
</style><path class="dcasq6b9j"/>`,
		"fallback": "fluent:layout-column-three-16-filled",
	});
}

export default Component;
