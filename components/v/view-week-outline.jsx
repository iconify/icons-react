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
		"content": `<style>.t5n6ptbyr {
  fill: currentColor;
  d: path("M4 18h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z");
}
</style><path class="t5n6ptbyr"/>`,
		"fallback": "material-symbols:view-week-outline",
	});
}

export default Component;
