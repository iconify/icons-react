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
		"content": `<style>.oxy-n1e2y {
  fill: currentColor;
  d: path("m17.66 17.66l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L9.7 9.7l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L4 4v14c0 1.1.9 2 2 2h14zM7 17v-5.76L12.76 17z");
}

.rzqxpqbkf {
  fill: currentColor;
  d: path("M7 17h5.76L7 11.24z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="rzqxpqbkf"/><path class="oxy-n1e2y"/>`,
		"fallback": "ic:twotone-square-foot",
	});
}

export default Component;
