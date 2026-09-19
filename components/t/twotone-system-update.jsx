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
		"content": `<style>.de36oebrp {
  fill: currentColor;
  d: path("M7 19h10V5H7zm4-6V8h2v5h3l-4 4l-4-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.y4y93qy5c {
  fill: currentColor;
  d: path("M16 13h-3V8h-2v5H8l4 4zm1-11.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z");
}
</style><path class="de36oebrp"/><path class="y4y93qy5c"/>`,
		"fallback": "ic:twotone-system-update",
	});
}

export default Component;
