import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z1c_i1nlq {
  fill: currentColor;
  d: path("M42.75 38a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5zm0-10a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5zm0-10a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5zm0-10a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="z1c_i1nlq"/>`,
		"fallback": "fluent:line-horizontal-4-48-regular",
	});
}

export default Component;
