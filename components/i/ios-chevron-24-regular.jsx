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
		"content": `<style>.rry0mjnrj {
  d: path("M13.97 4.72a.75.75 0 0 0 0 1.06L20.19 12l-6.22 6.22a.75.75 0 1 0 1.06 1.06l6.75-6.75a.75.75 0 0 0 0-1.06l-6.75-6.75a.75.75 0 0 0-1.06 0z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="rry0mjnrj"/>`,
		"fallback": "fluent:ios-chevron-24-regular",
	});
}

export default Component;
