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
		"content": `<style>.r4vn_ykdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.979 4.5h19.797v4.092h-2.029v15.32l4.058 3.988v3.918H25.522V43.5h-3.253V31.818H12.195v-4.023l3.813-3.813V8.593h-2.029z");
}
</style><path class="r4vn_ykdk"/>`,
		"fallback": "arcticons:pinned-shortcuts",
	});
}

export default Component;
