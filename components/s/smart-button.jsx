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
		"content": `<style>.xj8l3gbrz {
  fill: currentColor;
  d: path("M4 17q-.825 0-1.413-.588T2 15V9q0-.825.588-1.413T4 7h16q.825 0 1.413.588T22 9v6q0 .825-.588 1.413T20 17h-1v-2h1V9H4v6h6v2H4Zm10.5 2l-1.1-2.4l-2.4-1.1l2.4-1.1l1.1-2.4l1.1 2.4l2.4 1.1l-2.4 1.1l-1.1 2.4Zm2.5-5l-.625-1.375L15 12l1.375-.625L17 10l.625 1.375L19 12l-1.375.625L17 14Z");
}
</style><path class="xj8l3gbrz"/>`,
		"fallback": "material-symbols:smart-button",
	});
}

export default Component;
