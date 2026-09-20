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
		"content": `<style>.mebf7jbmt {
  fill: currentColor;
  d: path("M8 17v-4H5.1q-.65 0-.912-.562t.137-1.063l6.9-8.425q.3-.375.775-.375t.775.375l6.9 8.425q.4.5.138 1.063T18.9 13H16v4q0 .425-.288.713T15 18H9q-.425 0-.712-.288T8 17m-3 5q-.425 0-.712-.288T4 21t.288-.712T5 20h14q.425 0 .713.288T20 21t-.288.713T19 22z");
}
</style><path class="mebf7jbmt"/>`,
		"fallback": "material-symbols:shift-lock-rounded",
	});
}

export default Component;
