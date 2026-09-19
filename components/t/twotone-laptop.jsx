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
		"content": `<style>.a7nh1e2eq {
  fill: currentColor;
  d: path("M4 6h16v10H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.rhaht_kyz {
  fill: currentColor;
  d: path("M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z");
}
</style><path class="a7nh1e2eq"/><path class="rhaht_kyz"/>`,
		"fallback": "ic:twotone-laptop",
	});
}

export default Component;
