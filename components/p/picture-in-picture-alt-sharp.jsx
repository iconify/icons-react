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
		"content": `<style>.jk0i7owuz {
  fill: currentColor;
  d: path("M3 19V5h18v14zm8.308-2.039H19V11.27h-7.692zm3.846-2.845");
}
</style><path class="jk0i7owuz"/>`,
		"fallback": "material-symbols-light:picture-in-picture-alt-sharp",
	});
}

export default Component;
