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
		"content": `<style>.r2gstq-ff {
  fill: currentColor;
  d: path("m6.8 13l2.9 2.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T3.426 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7L6.8 11H20q.425 0 .713.288T21 12t-.288.713T20 13z");
}
</style><path class="r2gstq-ff"/>`,
		"fallback": "material-symbols:keyboard-backspace-rounded",
	});
}

export default Component;
