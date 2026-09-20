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

.vvir5wbly {
  d: path("M9.5 20.25V13.5H6.93c-.896 1.211-2.224 2.204-4.064 2.491a.75.75 0 1 1-.232-1.482A4.563 4.563 0 0 0 4.89 13.5H1.75a.75.75 0 0 1 0-1.5h20.5a.75.75 0 0 1 0 1.5h-.75v6.75a.75.75 0 0 1-1.5 0V13.5h-5.3l-.101.901l3.568-.396a.75.75 0 1 1 .166 1.49l-4.5.5a.75.75 0 0 1-.828-.828l.185-1.667H11v6.75a.75.75 0 0 1-1.5 0zm12-9.25V4.75a.75.75 0 0 0-1.5 0V11h1.5zm-6.523 0l.518-4.667a.75.75 0 1 0-1.49-.166L13.468 11h1.509zM11 11V4.75a.75.75 0 0 0-1.5 0V11H11zm-2.843 0A8.056 8.056 0 0 0 8.5 8.75A.75.75 0 0 0 7.75 8h-5a.75.75 0 1 0 0 1.5H6.95a7.107 7.107 0 0 1-.372 1.5h1.58z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="vvir5wbly"/></g>`,
		"fallback": "fluent:strikethrough-ga-na-24-regular",
	});
}

export default Component;
