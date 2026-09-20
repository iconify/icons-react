import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lpalclbmn {
  fill: currentColor;
  d: path("M24.25 3a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75m-6.163 7.442a1.7 1.7 0 0 0-.419.558H11v6h6.668a1.75 1.75 0 0 0 .832.832V24a1 1 0 0 1-1 1H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3H17.5a1 1 0 0 1 1 1v6.168q-.22.105-.413.274M17 9.5v-5h-6v5zm-7.5 0v-5H6.75A2.25 2.25 0 0 0 4.5 6.75V9.5zm0 1.5h-5v6h5zm-5 10.25a2.25 2.25 0 0 0 2.25 2.25H9.5v-5h-5zM11 23.5h6v-5h-6zm7.69-7.748l.89-1.002H16a.75.75 0 0 1 0-1.5h3.58l-.89-1.002a.75.75 0 0 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 0 1-1.12-.996");
}
</style><path class="lpalclbmn"/>`,
		"fallback": "fluent:table-move-right-28-regular",
	});
}

export default Component;
