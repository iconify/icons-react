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
		"content": `<style>.q_0ogsrnd {
  fill: currentColor;
  d: path("M3 5h11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 5h6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m16.321 6.907l2.386 2.386a.999.999 0 1 1-1.414 1.414l-2.386-2.386a3.83 3.83 0 1 1 1.414-1.414m-1.626-1.218a1.83 1.83 0 1 0-3.39-1.376a1.83 1.83 0 0 0 3.39 1.376M3 15h6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="q_0ogsrnd"/>`,
		"fallback": "coolicons:list-search-fill",
	});
}

export default Component;
