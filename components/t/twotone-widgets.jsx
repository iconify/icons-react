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
		"content": `<style>.cv8o4tx2s {
  fill: currentColor;
  d: path("M16.66 1.69L11 7.34L16.66 13l5.66-5.66zm-2.83 5.65l2.83-2.83l2.83 2.83l-2.83 2.83zM3 3v8h8V3zm6 6H5V5h4zM3 21h8v-8H3zm2-6h4v4H5zm8-2v8h8v-8zm6 6h-4v-4h4z");
}

.eujtjuxvj {
  fill: currentColor;
  d: path("M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82l2.83 2.83l2.83-2.83z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="eujtjuxvj"/><path class="cv8o4tx2s"/>`,
		"fallback": "ic:twotone-widgets",
	});
}

export default Component;
