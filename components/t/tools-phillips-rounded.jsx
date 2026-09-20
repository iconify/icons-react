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
		"content": `<style>.vvaf42bwh {
  fill: currentColor;
  d: path("M8 21q-.425 0-.712-.288T7 20t.288-.712T8 19h8q.425 0 .713.288T17 20t-.288.713T16 21zm0-3q-.425 0-.712-.288T7 17V8.675q0-.325.1-.625t.3-.575L10.45 3.4q.15-.2.35-.3t.45-.1h1.5q.25 0 .45.1t.35.3l3.05 4.075q.2.275.3.575t.1.625V17q0 .425-.288.713T16 18zm1-7l2-2V6L9 8.675zm6 0V8.675L13 6v3z");
}
</style><path class="vvaf42bwh"/>`,
		"fallback": "material-symbols:tools-phillips-rounded",
	});
}

export default Component;
