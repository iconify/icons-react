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
		"content": `<style>.axeltkbeb {
  fill: currentColor;
  d: path("M4 21v-2q-.825 0-1.412-.587T2 17V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v11q0 .825-.587 1.413T20 19v2h-1l-.65-2H5.675L5 21zm0-4h16V6H4zm8-5.5");
}
</style><path class="axeltkbeb"/>`,
		"fallback": "material-symbols:tv-gen-outline",
	});
}

export default Component;
