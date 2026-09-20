import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rvvhdgbvc {
  fill: currentColor;
  d: path("M14.601 3.211a.75.75 0 0 0-1.152 0c-1.795 2.154-5.337 4.71-7.374 5.848a.75.75 0 0 0-.377.552L4.06 21.5H2.75a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5h-1.26L22.352 9.61a.75.75 0 0 0-.378-.552c-2.036-1.138-5.578-3.694-7.373-5.848M10.272 21.5c1.259-1.83 2.557-4.18 3.728-7.892c1.059 3.35 2.24 5.665 3.728 7.892z");
}
</style><path class="rvvhdgbvc"/>`,
		"fallback": "fluent:tent-28-filled",
	});
}

export default Component;
