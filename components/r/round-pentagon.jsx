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
		"content": `<style>.csncbibwi {
  fill: currentColor;
  d: path("m2.47 10.42l3.07 9.22c.28.81 1.04 1.36 1.9 1.36h9.12a2 2 0 0 0 1.9-1.37l3.07-9.22c.28-.84-.03-1.76-.75-2.27L13.15 2.8a2 2 0 0 0-2.29 0L3.22 8.14c-.72.51-1.03 1.44-.75 2.28");
}
</style><path class="csncbibwi"/>`,
		"fallback": "ic:round-pentagon",
	});
}

export default Component;
