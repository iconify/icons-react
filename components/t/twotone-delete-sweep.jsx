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
		"content": `<style>.pb88p1yuz {
  fill: currentColor;
  d: path("M5 10h6v8H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.quogy5yku {
  fill: currentColor;
  d: path("M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zm2-8h6v8H5zm5-6H6L5 5H2v2h12V5h-3z");
}
</style><path class="pb88p1yuz"/><path class="quogy5yku"/>`,
		"fallback": "ic:twotone-delete-sweep",
	});
}

export default Component;
