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
		"content": `<style>.hdif4v_pg {
  fill: currentColor;
  d: path("M6 2h12a3 3 0 0 1 3 3v5c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V5a3 3 0 0 1 3-3m7 10V8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m-1 2a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="hdif4v_pg"/>`,
		"fallback": "coolicons:shield-warning-fill",
	});
}

export default Component;
