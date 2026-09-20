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
		"content": `<style>.sgnk1sbfd {
  fill: currentColor;
  d: path("M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m10 0v-4q0-.425.288-.712T14 15h6q.425 0 .713.288T21 16v4q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 12V4q0-.425.288-.712T4 3h16q.425 0 .713.288T21 4v8q0 .425-.288.713T20 13H4q-.425 0-.712-.288T3 12m2 7h4v-2H5zm10 0h4v-2h-4zm2-1");
}
</style><path class="sgnk1sbfd"/>`,
		"fallback": "material-symbols:tile-large-outline-rounded",
	});
}

export default Component;
