import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.htv6anbgl {
  fill: currentColor;
  d: path("M9.994 4.37a1 1 0 1 0-1.016-.017l.003.002a1 1 0 0 0 1.013.014M3.5 3h4.063a2 2 0 0 0 0 1H3.5a.5.5 0 0 0-.5.5v.17l3 1.286l2.194-.941A1.99 1.99 0 0 0 10 5.437V7.5A1.5 1.5 0 0 1 8.5 9h-5A1.5 1.5 0 0 1 2 7.5v-3A1.5 1.5 0 0 1 3.5 3M3 5.758V7.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V5.758L6.197 6.959a.5.5 0 0 1-.394 0z");
}
</style><path class="htv6anbgl"/>`,
		"fallback": "fluent:mail-unread-12-regular",
	});
}

export default Component;
