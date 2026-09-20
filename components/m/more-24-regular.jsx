import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.fwiorqbsd {
  d: path("M14.668 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0z");
  fill: currentColor;
}

.gpguo1bgc {
  d: path("M18.918 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5z");
  fill: currentColor;
}

.owiq35b6q {
  d: path("M8.667 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="owiq35b6q"/><path class="fwiorqbsd"/><path class="gpguo1bgc"/></g>`,
		"fallback": "fluent:more-24-regular",
	});
}

export default Component;
