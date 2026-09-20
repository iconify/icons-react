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
		"content": `<style>.n03kczwyq {
  fill: currentColor;
  d: path("M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m10 0v-4q0-.425.288-.712T14 15h6q.425 0 .713.288T21 16v4q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 12V4q0-.425.288-.712T4 3h16q.425 0 .713.288T21 4v8q0 .425-.288.713T20 13H4q-.425 0-.712-.288T3 12");
}
</style><path class="n03kczwyq"/>`,
		"fallback": "material-symbols:tile-large-rounded",
	});
}

export default Component;
