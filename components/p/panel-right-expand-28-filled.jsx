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
		"content": `<style>.avq8d8n2x {
  fill: currentColor;
  d: path("M22.25 4A3.75 3.75 0 0 1 26 7.75v12.5A3.75 3.75 0 0 1 22.25 24H5.753a3.75 3.75 0 0 1-3.75-3.75V7.75A3.75 3.75 0 0 1 5.753 4zM5.753 5.5a2.25 2.25 0 0 0-2.25 2.25v12.5a2.25 2.25 0 0 0 2.25 2.25h11.246v-17zm3.47 4.97a.75.75 0 1 1 1.061 1.06l-1.72 1.72h5.69a.75.75 0 0 1 0 1.5h-5.69l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z");
}
</style><path class="avq8d8n2x"/>`,
		"fallback": "fluent:panel-right-expand-28-filled",
	});
}

export default Component;
