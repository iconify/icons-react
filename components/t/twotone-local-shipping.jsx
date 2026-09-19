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
		"content": `<style>.dv4p_jb8d {
  fill: currentColor;
  d: path("M17 8V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m9-3H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12zm3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-1-6V9.5h2.5l1.96 2.5z");
}

.vs97xlvde {
  fill: currentColor;
  d: path("M3 15h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H15V6H3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="vs97xlvde"/><path class="dv4p_jb8d"/>`,
		"fallback": "ic:twotone-local-shipping",
	});
}

export default Component;
