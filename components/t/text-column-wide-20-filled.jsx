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
		"content": `<style>.ihn1lmbmv {
  fill: currentColor;
  d: path("M3.75 5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM3 11.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M3.75 14a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="ihn1lmbmv"/>`,
		"fallback": "fluent:text-column-wide-20-filled",
	});
}

export default Component;
