import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wnk1p2brk {
  fill: currentColor;
  d: path("M224 208h-20.06A88.05 88.05 0 0 0 144 64.37V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V80.46A72 72 0 0 1 181.25 208H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16m-96-72H80V32h48zm-56 48a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Z");
}
</style><path class="wnk1p2brk"/>`,
		"fallback": "ph:microscope",
	});
}

export default Component;
