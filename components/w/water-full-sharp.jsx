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
		"content": `<style>.i89z31n7l {
  fill: currentColor;
  d: path("M5.7 8.375Q6.975 7.7 8.338 7.35T11.125 7q.75 0 1.488.1t1.462.3q1.25.35 1.913.475T17.4 8h.925l.425-4H5.25zM5.2 22L3 2h18l-2.2 20z");
}
</style><path class="i89z31n7l"/>`,
		"fallback": "material-symbols:water-full-sharp",
	});
}

export default Component;
