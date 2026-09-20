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
		"content": `<style>.f1057lu3m {
  fill: currentColor;
  d: path("M16 17q.425 0 .713-.288T17 16V8q0-.425-.288-.712T16 7h-3q-.825 0-1.412.588T11 9v1.3q-.5.275-.75.7T10 12q0 .825.588 1.413T12 14t1.413-.587T14 12q0-.575-.275-1T13 10.3V9h2v6H9V9q.425 0 .713-.288T10 8t-.288-.712T9 7H8q-.425 0-.712.288T7 8v8q0 .425.288.713T8 17zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z");
}
</style><path class="f1057lu3m"/>`,
		"fallback": "material-symbols:nfc-outline-rounded",
	});
}

export default Component;
