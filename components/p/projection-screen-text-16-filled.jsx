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
		"content": `<style>.om1m661zx {
  fill: currentColor;
  d: path("M14 2a1 1 0 1 1 0 2v5.5a2.5 2.5 0 0 1-2.5 2.5h-3v1h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1h-3A2.5 2.5 0 0 1 2 9.5V4a1 1 0 0 1 0-2zM6.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-1-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm1-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><path class="om1m661zx"/>`,
		"fallback": "fluent:projection-screen-text-16-filled",
	});
}

export default Component;
