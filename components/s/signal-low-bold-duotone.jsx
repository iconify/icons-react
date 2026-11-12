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
		"content": `<style>.hl2w_eimj {
  fill: currentColor;
  d: path("M3 19.25C3.41421 19.25 3.75 19.5858 3.75 20C3.75 20.4142 3.41421 20.75 3 20.75C2.58579 20.75 2.25 20.4142 2.25 20C2.25 19.5858 2.58579 19.25 3 19.25Z");
}

.vufvnc4-k {
  fill: currentColor;
  d: path("M6.75 20V16C6.75 15.5858 7.08579 15.25 7.5 15.25C7.91421 15.25 8.25 15.5858 8.25 16V20C8.25 20.4142 7.91421 20.75 7.5 20.75C7.08579 20.75 6.75 20.4142 6.75 20Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path class="vufvnc4-k"/><path class="hl2w_eimj"/>`,
		"fallback": "solar:signal-low-bold-duotone",
	});
}

export default Component;
