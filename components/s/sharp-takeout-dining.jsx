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
		"content": `<style>.agh3ykb5f {
  fill: currentColor;
  d: path("m22 7.46l-1.41-1.41L19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5l-1.59-1.56L2 7.44L4.66 10h14.69zM5.93 20h12.14l.63-8.45H5.3z");
}
</style><path class="agh3ykb5f"/>`,
		"fallback": "ic:sharp-takeout-dining",
	});
}

export default Component;
