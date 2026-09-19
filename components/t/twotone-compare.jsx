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
		"content": `<style>.f0mvouz6n {
  fill: currentColor;
  d: path("M19 5h-5v7l5 6zm-9 13v-6l-5 6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ypqsb7blw {
  fill: currentColor;
  d: path("M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2zm-2 17H5l5-6z");
}
</style><path class="f0mvouz6n"/><path class="ypqsb7blw"/>`,
		"fallback": "ic:twotone-compare",
	});
}

export default Component;
