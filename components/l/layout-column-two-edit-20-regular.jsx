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
		"content": `<style>.lu4_yvqga {
  fill: currentColor;
  d: path("M15.81 10.548a1.87 1.87 0 1 1 2.644 2.644l-4.829 4.83a2.2 2.2 0 0 1-1.021.578l-1.498.375a.89.89 0 0 1-1.079-1.08l.374-1.497c.097-.387.297-.74.579-1.021zM14 3a3 3 0 0 1 3 3v3.006c-.342.016-.68.091-1 .228V6a2 2 0 0 0-2-2h-3.5v10.443l-.227.227a3.2 3.2 0 0 0-.773 1.255V4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.478q-.025.078-.045.155L9.222 17H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z");
}
</style><path class="lu4_yvqga"/>`,
		"fallback": "fluent:layout-column-two-edit-20-regular",
	});
}

export default Component;
