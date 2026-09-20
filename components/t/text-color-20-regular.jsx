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
		"content": `<style>.i4u74cbhq {
  fill: currentColor;
  d: path("M10.464 2.314a.5.5 0 0 0-.928 0l-3 7.5a.5.5 0 1 0 .928.372l1.073-2.682h2.926l1.073 2.682a.5.5 0 1 0 .928-.372zM10 3.846l1.063 2.658H8.937zM4.5 12A1.5 1.5 0 0 0 3 13.5v3A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5zM4 13.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z");
}
</style><path class="i4u74cbhq"/>`,
		"fallback": "fluent:text-color-20-regular",
	});
}

export default Component;
