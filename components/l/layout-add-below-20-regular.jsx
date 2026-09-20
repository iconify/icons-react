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
		"content": `<style>.pxgldg3ca {
  fill: currentColor;
  d: path("M16.5 16a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1zM14 3a3 3 0 0 1 3 3v5.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V6a3 3 0 0 1 3-3zM6 4a2 2 0 0 0-2 2v5h12V6a2 2 0 0 0-2-2z");
}
</style><path class="pxgldg3ca"/>`,
		"fallback": "fluent:layout-add-below-20-regular",
	});
}

export default Component;
