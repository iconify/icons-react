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
		"content": `<style>.f4207mbrf {
  fill: currentColor;
  d: path("M20 6H4l8 5zM4 8v10h16V8l-8 5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.i-s8jb5ba {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2l-8 5l-8-5zm0 12H4V8l8 5l8-5z");
}
</style><path class="f4207mbrf"/><path class="i-s8jb5ba"/>`,
		"fallback": "ic:twotone-markunread",
	});
}

export default Component;
