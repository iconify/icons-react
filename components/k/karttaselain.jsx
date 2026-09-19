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
		"content": `<style>.o5imvbf9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.513 23.806a7.847 7.847 0 0 1-.526-11.222c3.01-3.242 8.124-3.474 11.424-.519c3.301 2.956 3.538 7.98.53 11.223s-8.123 3.477-11.424.522z");
}

.poff55b-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.146 43.468v-4.853c0-4.079-5.496-9.585-6.235-10.325c-4.025-3.748-5.431-9.618-3.536-14.842c1.894-5.223 6.712-8.758 12.185-8.94s10.507 3.025 12.734 8.11c2.227 5.087 1.2 11.038-2.574 15.026c0 0-6.745 6.151-6.745 10.97c0 3.558-.077 4.886-.077 4.886");
}
</style><path class="poff55b-r"/><path class="o5imvbf9g"/>`,
		"fallback": "arcticons:karttaselain",
	});
}

export default Component;
