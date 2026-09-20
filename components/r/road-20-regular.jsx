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
		"content": `<style>.oe0p9ac1o {
  fill: currentColor;
  d: path("M5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zm11 0a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zm-5.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zm-1 9a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0zm0 3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0z");
}
</style><path class="oe0p9ac1o"/>`,
		"fallback": "fluent:road-20-regular",
	});
}

export default Component;
