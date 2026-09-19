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
		"content": `<style>.s-a3gtbya {
  fill: currentColor;
  d: path("M17 6c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3m7 17H5V8h14zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3");
}

.x978-lb8m {
  fill: currentColor;
  d: path("M5 8v12h14V8zm7 6c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="x978-lb8m"/><path class="s-a3gtbya"/>`,
		"fallback": "ic:twotone-local-mall",
	});
}

export default Component;
