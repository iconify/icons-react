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
		"content": `<style>.d6id4bchy {
  fill: currentColor;
  d: path("M14.5 15H18V9h-3.5zM6 17q-.825 0-1.412-.587T4 15V9q0-.825.588-1.412T6 7h4.5v2H6v6h4.5v2zm8.5 0q-.825 0-1.412-.587T12.5 15V9q0-.825.588-1.412T14.5 7H18q.825 0 1.413.588T20 9v6q0 .825-.587 1.413T18 17z");
}
</style><path class="d6id4bchy"/>`,
		"fallback": "material-symbols:language-us-colemak",
	});
}

export default Component;
