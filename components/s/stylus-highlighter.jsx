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
		"content": `<style>.e-9y27bjk {
  fill: currentColor;
  d: path("M7 16V5q0-.825.588-1.412T9 3q.225 0 .45.05t.425.15l6 2.975q.5.25.813.738T17 7.975V16zm-3 5l.55-1.625q.2-.625.725-1T6.45 18h11.1q.65 0 1.175.375t.725 1L20 21z");
}
</style><path class="e-9y27bjk"/>`,
		"fallback": "material-symbols:stylus-highlighter",
	});
}

export default Component;
