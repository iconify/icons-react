import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u0k6uliew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 19.854V15.11h4.674M43.5 28.146v4.743h-4.673M7.94 28.775v-9.55l6.326 9.55v-9.55m7.121 8.345a2.39 2.39 0 0 1-2.075 1.205h0a2.387 2.387 0 0 1-2.387-2.388v-1.552a2.387 2.387 0 0 1 2.388-2.387h0a2.39 2.39 0 0 1 2.387 2.388v.775h-4.775m8.687-5.132v7.102c0 .66.535 1.194 1.194 1.194h.358m-2.806-6.327h2.507m4.211-1.969v7.102c0 .66.534 1.194 1.193 1.194h.358m-2.805-6.327h2.507m2.957 2.388a2.387 2.387 0 1 1 4.775 0v1.552a2.388 2.388 0 0 1-4.775 0z");
}
</style><path class="u0k6uliew"/>`,
		"fallback": "arcticons:netto",
	});
}

export default Component;
