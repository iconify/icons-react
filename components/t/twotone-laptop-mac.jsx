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
		"content": `<style>.b_08bu7ae {
  fill: currentColor;
  d: path("M4 5h16v11H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.tmbg20bhn {
  fill: currentColor;
  d: path("M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1");
}
</style><path class="b_08bu7ae"/><path class="tmbg20bhn"/>`,
		"fallback": "ic:twotone-laptop-mac",
	});
}

export default Component;
