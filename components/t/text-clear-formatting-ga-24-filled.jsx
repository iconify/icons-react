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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ysxw0hbdv {
  d: path("M12.5 3.25a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0V8H14a.75.75 0 0 0 0-1.5h-1.5V3.25zm-8.75.25a.75.75 0 1 0 0 1.5h4.245c-.162 1.634-1.328 4.092-4.46 5.032a.75.75 0 0 0 .43 1.436c4.39-1.317 5.726-5.15 5.532-7.286A.75.75 0 0 0 8.75 3.5h-5zm14.522 16.711L12.79 14.73l4.156-4.157a1.952 1.952 0 0 1 2.759-.001l2.724 2.724a1.95 1.95 0 0 1-.002 2.759l-4.156 4.156zm-6.542-4.42l5.481 5.48l-.23.23h3.02a.75.75 0 0 1 0 1.5h-5.5l.002-.007a1.94 1.94 0 0 1-1.208-.563l-2.724-2.724a1.95 1.95 0 0 1 .002-2.759l1.157-1.157z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="ysxw0hbdv"/></g>`,
		"fallback": "fluent:text-clear-formatting-ga-24-filled",
	});
}

export default Component;
