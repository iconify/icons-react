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
		"content": `<style>.d6ymm9_1x {
  fill: var(--svg-color--6f3de0, #6f3de0);
}

.eupa4sbud {
  d: path("M3 3v8.999a9 9 0 1 0 18 0V3h-3.6v8.999a5.4 5.4 0 1 1-10.8 0V3z");
}

.g0nwmtl9c {
  d: path("M10.2 3v9.001a1.8 1.8 0 1 0 3.6 0V3z");
}
</style><g class="d6ymm9_1x"><path class="eupa4sbud"/><path class="g0nwmtl9c"/></g>`,
		"fallback": "token-branded:ultra",
	});
}

export default Component;
