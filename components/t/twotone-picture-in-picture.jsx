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
		"content": `<style>.dr3hs9bil {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m0 16.01H3V4.98h18z");
}

.rpldipb-r {
  fill: currentColor;
  d: path("M13 9h4v2h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.yq6pcacnm {
  fill: currentColor;
  d: path("M19 7h-8v6h8zm-2 4h-4V9h4z");
}
</style><path class="yq6pcacnm"/><path class="rpldipb-r"/><path class="dr3hs9bil"/>`,
		"fallback": "ic:twotone-picture-in-picture",
	});
}

export default Component;
