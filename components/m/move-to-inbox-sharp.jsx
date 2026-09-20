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
		"content": `<style>.nbcxfuz1v {
  fill: currentColor;
  d: path("M12 13.308L8.692 10l.708-.72l2.1 2.1V6.693h1v4.689l2.1-2.1l.708.719zM4 20V4h16v16zm9.725-3.934q.775-.55 1.075-1.45H19V5H5v9.616h4.2q.3.9 1.075 1.45t1.725.55t1.725-.55");
}
</style><path class="nbcxfuz1v"/>`,
		"fallback": "material-symbols-light:move-to-inbox-sharp",
	});
}

export default Component;
