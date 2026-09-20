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
		"content": `<style>.dfc29lb4k {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V6.5q0-.35.113-.663t.337-.587l1.4-1.7q.225-.275.513-.413T6 3h12q.35 0 .638.138t.512.412l1.4 1.7q.225.275.338.588T21 6.5V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zm9.15 11.05l3.55-3.55l-3.55-3.55l-1.45 1.45l2.1 2.1l-2.1 2.1zm-5.05 0l1.45-1.45l-2.1-2.1l2.1-2.1L9.5 9.95L5.95 13.5z");
}
</style><path class="dfc29lb4k"/>`,
		"fallback": "material-symbols:sdk",
	});
}

export default Component;
