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
		"content": `<style>.ts2k1-2_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.564 38.228s-1.673-1.178-1.673-2.83V13.606s-.22-1.999 1.837-3.19L22.51 4.95c1.055-.61 1.93-.59 3.04.004l9.669 5.717s1.89 1.106 1.89 2.667v11.16c0 .394.138 1.674-.898 2.275l-9.505 6.248h-2.574v-10.2l3.97-3.096l-7.444-4.129V43.5c-3.028-1.765-4.91-3.088-8.093-5.27zm15.538-18.503l8.767 4.731m-16.212-8.86V6.032");
}
</style><path class="ts2k1-2_r"/>`,
		"fallback": "arcticons:parallel-space",
	});
}

export default Component;
