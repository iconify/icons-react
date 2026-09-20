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
		"content": `<style>.a-g7c2zdx {
  fill: currentColor;
  d: path("m9.2 16l2.8-2.1l2.75 2.1l-1.05-3.4l2.8-2.2h-3.4L12 7l-1.1 3.4H7.5l2.75 2.2zM4 20q-.825 0-1.412-.587T2 18v-3.375q0-.275.175-.475t.45-.25q.6-.2.988-.725T4 12t-.387-1.175t-.988-.725q-.275-.05-.45-.25T2 9.375V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v3.375q0 .275-.175.475t-.45.25q-.6.2-.987.725T20 12t.388 1.175t.987.725q.275.05.45.25t.175.475V18q0 .825-.587 1.413T20 20z");
}
</style><path class="a-g7c2zdx"/>`,
		"fallback": "material-symbols:local-activity",
	});
}

export default Component;
