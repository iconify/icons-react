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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.m_5agn3nm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 20.748v6.504h3.252m17.608 0v-6.504h2.13c1.203 0 2.18.978 2.18 2.184s-.977 2.185-2.18 2.185h-2.13m2.129 0l2.13 2.134M13.199 24h2.12m1.132 3.252h-3.252v-6.504h3.252m22.335 4.35h-2.882m-.713 2.154l2.154-6.504l2.155 6.504m-12.375-2.154h-2.882m-.714 2.154l2.155-6.504l2.155 6.504M20.69 24a1.626 1.626 0 0 1 0 3.252h-2.684v-6.504h2.684a1.626 1.626 0 0 1 0 3.252m0 0h-2.683");
}
</style><path class="i9clfwm2k"/><path class="m_5agn3nm"/>`,
		"fallback": "arcticons:mylebara",
	});
}

export default Component;
