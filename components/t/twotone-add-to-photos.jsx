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
		"content": `<style>.uhatzk4ug {
  fill: currentColor;
  d: path("M20 4H8v12h12zm-1 7h-4v4h-2v-4H9V9h4V5h2v4h4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.z0j1u_b4v {
  fill: currentColor;
  d: path("M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2m4-4h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M8 4h12v12H8zm7 1h-2v4H9v2h4v4h2v-4h4V9h-4z");
}
</style><path class="uhatzk4ug"/><path class="z0j1u_b4v"/>`,
		"fallback": "ic:twotone-add-to-photos",
	});
}

export default Component;
