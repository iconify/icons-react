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
		"content": `<style>.j7ffi291i {
  fill: currentColor;
  d: path("M5.7 8.375Q6.975 7.7 8.338 7.35T11.125 7q.75 0 1.488.1t1.462.3q1.25.35 1.913.475T17.4 8h.925l.425-4H5.25zM6.975 22q-.775 0-1.337-.5T5 20.225L3 2h18l-2 18.225q-.075.775-.638 1.275t-1.337.5z");
}
</style><path class="j7ffi291i"/>`,
		"fallback": "material-symbols:water-full",
	});
}

export default Component;
