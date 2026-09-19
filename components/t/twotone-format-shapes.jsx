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
		"content": `<style>.t5m5vtboa {
  fill: currentColor;
  d: path("M3 3h2v2H3zm16 16h2v2h-2zm0-16h2v2h-2zM3 19h2v2H3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zj9dzebst {
  fill: currentColor;
  d: path("m11.29 7l-3.4 9h1.62l.73-2h3.49l.74 2h1.63l-3.41-9zm-.6 5.74L12 8.91l1.3 3.83zM17 3H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2V1h-6zM3 3h2v2H3zm2 18H3v-2h2zm16 0h-2v-2h2zM19 3h2v2h-2zm0 14h-2v2H7v-2H5V7h2V5h10v2h2z");
}
</style><path class="t5m5vtboa"/><path class="zj9dzebst"/>`,
		"fallback": "ic:twotone-format-shapes",
	});
}

export default Component;
