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
		"content": `<style>.h6do8bcff {
  fill: currentColor;
  d: path("M4.288 16.713Q4 16.425 4 16V8q0-.425.288-.712T5 7h5q.425 0 .713.288T11 8t-.288.713T10 9H6v2h3q.425 0 .713.288T10 12t-.288.713T9 13H6v3q0 .425-.288.713T5 17t-.712-.288m9 0Q13 16.426 13 16V8q0-.425.288-.712T14 7h4q.825 0 1.413.588T20 9v2q0 .8-.55 1.363t-1.3.637l1.225 2.65q.225.475-.062.913T18.5 17q-.275 0-.5-.15t-.35-.4L16.025 13H15v3q0 .425-.288.713T14 17t-.712-.288M15 11h3V9h-3z");
}
</style><path class="h6do8bcff"/>`,
		"fallback": "material-symbols:language-french-outline-rounded",
	});
}

export default Component;
