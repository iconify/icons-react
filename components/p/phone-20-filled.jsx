import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d_r2di-zt {
  fill: currentColor;
  d: path("M6.5 2A1.5 1.5 0 0 0 5 3.5v13A1.5 1.5 0 0 0 6.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 13.5 2zM9 14h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1");
}
</style><path class="d_r2di-zt"/>`,
		"fallback": "fluent:phone-20-filled",
	});
}

export default Component;
