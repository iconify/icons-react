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
		"content": `<style>.mqbadjbya {
  fill: currentColor;
  d: path("M7 17h8q.425 0 .713.288T16 18t-.288.713T15 19H6q-.425 0-.712-.288T5 18V9q0-.425.288-.712T6 8t.713.288T7 9zm5-5h8q.425 0 .713.288T21 13t-.288.713T20 14h-9q-.425 0-.712-.288T10 13V4q0-.425.288-.712T11 3t.713.288T12 4z");
}
</style><path class="mqbadjbya"/>`,
		"fallback": "material-symbols:more-down-outline-rounded",
	});
}

export default Component;
