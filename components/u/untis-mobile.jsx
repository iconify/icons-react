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
		"content": `<style>.bqom2lldh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.66 15.939v10.78a5.34 5.34 0 1 0 10.68 0V15.94M24 2.5v5.375m8.228-3.738l-1.371 3.31m8.346 1.35l-2.534 2.534m7.195 4.441l-3.31 1.371M45.5 24h-5.375m3.738 8.228l-3.31-1.371m-1.35 8.346l-2.534-2.534m-4.441 7.195l-1.371-3.31M24 45.5v-5.375m-8.228 3.738l1.371-3.31m-8.346-1.35l2.534-2.534m-7.195-4.441l3.31-1.371M2.5 24h5.375m-3.738-8.228l3.31 1.371m1.35-8.346l2.534 2.534m4.441-7.195l1.371 3.31");
}
</style><path class="bqom2lldh"/>`,
		"fallback": "arcticons:untis-mobile",
	});
}

export default Component;
