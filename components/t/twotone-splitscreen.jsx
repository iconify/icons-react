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
		"content": `<style>.as-90acpa {
  fill: currentColor;
  d: path("M6 4h12v5H6zm0 11h12v5H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ascocrbkx {
  fill: currentColor;
  d: path("M18 2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 7H6V4h12zm0 4H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m0 7H6v-5h12z");
}
</style><path class="as-90acpa"/><path class="ascocrbkx"/>`,
		"fallback": "ic:twotone-splitscreen",
	});
}

export default Component;
