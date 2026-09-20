import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xw70kx-6v {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 21.25V18.5h5v5H6.75a2.25 2.25 0 0 1-2.25-2.25M11 23.5v-5h6v5zM4.5 17V6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25V17zm14 6.5v-5h5v2.75a2.25 2.25 0 0 1-2.25 2.25z");
}
</style><path class="xw70kx-6v"/>`,
		"fallback": "fluent:table-bottom-row-28-regular",
	});
}

export default Component;
