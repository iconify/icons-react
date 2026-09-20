import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sftiv9bio {
  fill: currentColor;
  d: path("M13 2H7a.5.5 0 0 0 0 1h2.474L5.656 13H3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H6.726l3.818-10H13a.5.5 0 0 0 0-1");
}
</style><path class="sftiv9bio"/>`,
		"fallback": "fluent:text-italic-16-regular",
	});
}

export default Component;
