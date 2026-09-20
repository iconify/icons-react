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
		"content": `<style>.nid-gh7jy {
  fill: currentColor;
  d: path("M6 21v-2h12v2z");
}
</style><path class="nid-gh7jy"/>`,
		"fallback": "material-symbols:minimize-outline",
	});
}

export default Component;
