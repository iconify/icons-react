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
		"content": `<style>.hvja534ew {
  fill: currentColor;
  d: path("M15.577 20H4V4h16v11.577zM15 19v-4h4V5H5v14zm-3.5-3.5h1v-6h3v-1h-7v1h3zM5 19V5z");
}
</style><path class="hvja534ew"/>`,
		"fallback": "material-symbols-light:sticky-note-outline-sharp",
	});
}

export default Component;
