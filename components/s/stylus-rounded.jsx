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
		"content": `<style>.p-nodyimu {
  fill: currentColor;
  d: path("M5.027 19.917q-.429.087-.73-.214q-.3-.301-.214-.73l.644-3.134l3.435 3.434zm3.894-1.292l-3.546-3.546L15.739 4.734q.459-.459 1.136-.459t1.137.46l1.254 1.254q.459.459.459 1.136t-.46 1.137z");
}
</style><path class="p-nodyimu"/>`,
		"fallback": "material-symbols-light:stylus-rounded",
	});
}

export default Component;
