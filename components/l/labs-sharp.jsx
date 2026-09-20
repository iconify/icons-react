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
		"content": `<style>.k7951rbyj {
  fill: currentColor;
  d: path("M12 21q-1.804 0-3.075-1.241T7.654 16.73V7.654H6V3h12v4.654h-1.673v9.365q-.116 1.69-1.367 2.836T12 21m2.357-1.942q.97-.943.97-2.327v-.75h-3.193v-1h3.193v-2.846h-3.193v-1h3.193V7.654H8.654v9.077q0 1.384.98 2.327q.982.942 2.367.942t2.356-.942");
}
</style><path class="k7951rbyj"/>`,
		"fallback": "material-symbols-light:labs-sharp",
	});
}

export default Component;
