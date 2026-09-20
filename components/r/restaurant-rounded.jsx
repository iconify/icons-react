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
		"content": `<style>.zjw5fuz-g {
  fill: currentColor;
  d: path("M7 9V3q0-.425.288-.712T8 2t.713.288T9 3v6h1V3q0-.425.288-.712T11 2t.713.288T12 3v6q0 1.4-.862 2.45T9 12.85V21q0 .425-.288.713T8 22t-.712-.288T7 21v-8.15q-1.275-.35-2.137-1.4T4 9V3q0-.425.288-.712T5 2t.713.288T6 3v6zm10 5h-2q-.425 0-.712-.288T14 13V7q0-1.75 1.288-3.375T17.95 2q.45 0 .75.35t.3.825V21q0 .425-.288.713T18 22t-.712-.288T17 21z");
}
</style><path class="zjw5fuz-g"/>`,
		"fallback": "material-symbols:restaurant-rounded",
	});
}

export default Component;
