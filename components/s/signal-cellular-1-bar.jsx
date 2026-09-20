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
		"content": `<style>.nu8gwy0th {
  fill: currentColor;
  d: path("M2 22L22 2v20zm8-2h10V6.85l-10 10z");
}
</style><path class="nu8gwy0th"/>`,
		"fallback": "material-symbols:signal-cellular-1-bar",
	});
}

export default Component;
