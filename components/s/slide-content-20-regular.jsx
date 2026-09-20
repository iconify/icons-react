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
		"content": `<style>.iqge6go6e {
  fill: currentColor;
  d: path("M15.756 4.013A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-7A2.5 2.5 0 0 1 4.5 4h11zM4.5 5A1.5 1.5 0 0 0 3 6.5v7A1.5 1.5 0 0 0 4.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.347-1.492L15.5 5zM9 7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm5.5 5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm0-2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm0-2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z");
}
</style><path class="iqge6go6e"/>`,
		"fallback": "fluent:slide-content-20-regular",
	});
}

export default Component;
