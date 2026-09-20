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
		"content": `<style>.gmjsakepx {
  fill: currentColor;
  d: path("M7.692 17.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2zM13 14.308h5.5v-.885H13zm0 2.384h3.5v-.884H13zM4.616 21q-.691 0-1.153-.462T3 19.385v-9.77q0-.69.463-1.152T4.615 8H10V4q0-.413.294-.706T11 3h2q.413 0 .706.294T14 4v4h5.385q.69 0 1.152.463T21 9.616v9.769q0 .69-.463 1.153T19.385 21zM11 9.77h2V4h-2z");
}
</style><path class="gmjsakepx"/>`,
		"fallback": "material-symbols-light:medical-information",
	});
}

export default Component;
