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
		"content": `<style>.j9yjp7bte {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M22 15.5v97L106 64z");
}
</style><path class="j9yjp7bte"/>`,
		"fallback": "noto-v1:play-button",
	});
}

export default Component;
