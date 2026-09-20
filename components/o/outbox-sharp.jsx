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
		"content": `<style>.f_n3kzbpn {
  fill: currentColor;
  d: path("M4 20V4h16v16zm9.725-3.934q.775-.55 1.075-1.45H19V5H5v9.616h4.2q.3.9 1.075 1.45t1.725.55t1.725-.55M11.5 13.308V8.619l-2.1 2.1L8.692 10L12 6.692L15.308 10l-.708.72l-2.1-2.1v4.688z");
}
</style><path class="f_n3kzbpn"/>`,
		"fallback": "material-symbols-light:outbox-sharp",
	});
}

export default Component;
