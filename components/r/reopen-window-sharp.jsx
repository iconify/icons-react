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
		"content": `<style>.j4t8-u1en {
  fill: currentColor;
  d: path("M3 19V5h18v6.616h-1V8H4v10h7.154v1zm15.23 3.385q-1.594 0-2.831-.965T13.735 19h.934q.402 1.12 1.355 1.81t2.207.69q1.577 0 2.692-1.115t1.116-2.693T20.923 15t-2.692-1.115q-.918 0-1.754.445t-1.446 1.17h1.892v.885h-3.384V13h.884v1.848q.713-.823 1.71-1.336Q17.129 13 18.23 13q1.947 0 3.32 1.373t1.372 3.32t-1.373 3.319t-3.32 1.373");
}
</style><path class="j4t8-u1en"/>`,
		"fallback": "material-symbols-light:reopen-window-sharp",
	});
}

export default Component;
