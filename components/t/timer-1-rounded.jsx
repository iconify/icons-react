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
		"content": `<style>.zhf8xkugf {
  fill: currentColor;
  d: path("M12.438 18.563Q12 18.125 12 17.5V8H9.5q-.625 0-1.062-.437T8 6.5t.438-1.062T9.5 5H13q.825 0 1.413.588T15 7v10.5q0 .625-.437 1.063T13.5 19t-1.062-.437");
}
</style><path class="zhf8xkugf"/>`,
		"fallback": "material-symbols:timer-1-rounded",
	});
}

export default Component;
