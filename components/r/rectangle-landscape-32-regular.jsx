import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jkj50bkok {
  fill: currentColor;
  d: path("M2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5zM6.5 6A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26h19a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 25.5 6z");
}
</style><path class="jkj50bkok"/>`,
		"fallback": "fluent:rectangle-landscape-32-regular",
	});
}

export default Component;
