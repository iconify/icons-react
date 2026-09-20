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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.khsbed5es {
  d: path("M9.707 8.5l.647.647a.5.5 0 0 1-.708.707l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 0 1 .708.707l-.647.646h1.791a.5.5 0 0 1 0 1h-1.79zM4 3a2 2 0 0 0-2 2V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zM7 12V4h5a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1H7z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="khsbed5es"/></g>`,
		"fallback": "fluent:panel-right-expand-16-filled",
	});
}

export default Component;
