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
		"content": `<style>.fhos75s6a {
  d: path("M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4zm4 11V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.qqfehwb8j {
  d: path("M10.821 10.5H14.5a.5.5 0 0 0 0-1h-3.679l.999-.874a.5.5 0 1 0-.659-.752l-2 1.75a.5.5 0 0 0 0 .752l2 1.75a.5.5 0 1 0 .659-.752l-.999-.874z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="qqfehwb8j"/><path class="fhos75s6a"/></g>`,
		"fallback": "fluent:pane-open-20-filled",
	});
}

export default Component;
