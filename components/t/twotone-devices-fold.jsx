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
		"content": `<style>.iz6i2ybzx {
  fill: currentColor;
  d: path("m15 3l-3 1.29v13.68l3-1.29z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.pyksxplae {
  fill: currentColor;
  d: path("M20 3h-3c0-1.44-1.47-2.4-2.79-1.84l-3 1.29C10.48 2.76 10 3.49 10 4.29V19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 1.29L15 3v13.68l-3 1.29zM20 19h-5.33l1.12-.48c.73-.32 1.21-1.04 1.21-1.84V5h3zM2 3h2v2H2zm0 16h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm4-4h2v2H6zm0 16h2v2H6z");
}
</style><path class="iz6i2ybzx"/><path class="pyksxplae"/>`,
		"fallback": "ic:twotone-devices-fold",
	});
}

export default Component;
