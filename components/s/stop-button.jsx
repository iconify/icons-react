import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mgpk_ybqo {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M32 32h64v64H32z");
}

.x6vb0-lkk {
  fill: none;
  d: path("M0 0h128v128H0z");
}
</style><path class="x6vb0-lkk"/><path class="mgpk_ybqo"/>`,
		"fallback": "noto-v1:stop-button",
	});
}

export default Component;
