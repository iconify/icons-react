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
		"content": `<style>.joqcrltoq {
  fill: currentColor;
  d: path("M2.5 8a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z");
}
</style><path class="joqcrltoq"/>`,
		"fallback": "fluent:reorder-20-regular",
	});
}

export default Component;
