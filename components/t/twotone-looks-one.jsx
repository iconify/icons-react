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
		"content": `<style>.fj3g-0jbg {
  fill: currentColor;
  d: path("M19 5H5v14h14zm-5 12h-2V9h-2V7h4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.lllwdbmkk {
  fill: currentColor;
  d: path("M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5zm5 4h2v8h2V7h-4z");
}
</style><path class="fj3g-0jbg"/><path class="lllwdbmkk"/>`,
		"fallback": "ic:twotone-looks-one",
	});
}

export default Component;
