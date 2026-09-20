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
		"content": `<style>.fucqx4bvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.522 22.896a2.56 2.56 0 1 1 5.121 0v4.225m-5.121-6.785v6.785m5.121-4.225a2.56 2.56 0 1 1 5.121 0v4.225M3.5 22.896a2.56 2.56 0 0 1 2.56-2.56m-2.56 0v6.785m20.102-10.242v10.242M20.73 24.56a2.56 2.56 0 1 1-5.121 0v-1.664a2.56 2.56 0 1 1 5.121 0m0 4.225v-6.785m-7.868 5.494a2.56 2.56 0 0 1-4.786-1.268v-1.666a2.56 2.56 0 1 1 5.121 0v.833h-5.12m36.087 2.101a2.56 2.56 0 0 1-4.785-1.268v-1.666a2.56 2.56 0 1 1 5.121 0v.833h-5.121M44.635 18C42.035 9.049 33.789 2.5 24 2.5S5.965 9.049 3.366 18m0 12C5.965 38.951 14.21 45.5 24 45.5S42.035 38.951 44.635 30");
}
</style><path class="fucqx4bvv"/>`,
		"fallback": "arcticons:realme-community",
	});
}

export default Component;
