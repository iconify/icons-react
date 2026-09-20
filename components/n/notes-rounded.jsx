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
		"content": `<style>.hwfei0b3e {
  fill: currentColor;
  d: path("M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h10q.425 0 .713.288T15 17t-.288.713T14 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z");
}
</style><path class="hwfei0b3e"/>`,
		"fallback": "material-symbols:notes-rounded",
	});
}

export default Component;
