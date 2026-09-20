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
		"content": `<style>.tvoinn1kq {
  fill: currentColor;
  d: path("M2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18m18-7V6H4v5zm-10 7h10v-5H10zm-6 0h4v-5H4z");
}
</style><path class="tvoinn1kq"/>`,
		"fallback": "material-symbols:view-comfy-outline-rounded",
	});
}

export default Component;
