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
		"content": `<style>.g76pp-bay {
  fill: currentColor;
  d: path("M6.221 13.742L6.923 20h10.173l.708-6.5h-.283q-.911 0-1.69-.137q-.777-.138-2.108-.519q-.633-.194-1.306-.269t-1.355-.075q-1.295 0-2.511.306t-2.33.936m-.135-1.053q1.175-.595 2.428-.892t2.573-.297q.73 0 1.458.09t1.434.29q1.327.37 2.018.495q.692.125 1.5.125h.417l.951-8.5H5.115zM6.027 21L4 3h16l-2.008 18zm.896-1h10.173z");
}
</style><path class="g76pp-bay"/>`,
		"fallback": "material-symbols-light:water-medium-outline-sharp",
	});
}

export default Component;
