import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a_c_ksbjn {
  fill: currentColor;
  d: path("M7 2.5a.5.5 0 0 0-1 0V3h-.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18H11v-3.5a1.5 1.5 0 0 1 1.5-1.5H16V4.5A1.5 1.5 0 0 0 14.5 3H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7zm0 5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M7 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m8.69.5H12.5a.5.5 0 0 0-.5.5v3.19q.077-.06.146-.13l3.415-3.414q.07-.07.128-.146");
}
</style><path class="a_c_ksbjn"/>`,
		"fallback": "fluent:notepad-20-filled",
	});
}

export default Component;
