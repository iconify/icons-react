import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d11-3pbkv {
  cx: 32px;
  cy: 49.6px;
  r: 4.2px;
}

.g2csbibpu {
  fill: var(--svg-color--231f20, #231f20);
}

.n-5fhjb9j {
  d: path("m27.8 23.6l2.8 18.5c.3 1.8 2.6 1.8 2.9 0l2.7-18.5c.5-7.2-8.9-7.2-8.4 0");
}

.othm7lb9i {
  fill: var(--svg-color--ffce31, #ffce31);
  d: path("M5.9 62c-3.3 0-4.8-2.4-3.3-5.3L29.3 4.2c1.5-2.9 3.9-2.9 5.4 0l26.7 52.5c1.5 2.9 0 5.3-3.3 5.3z");
}
</style><path class="othm7lb9i"/><g class="g2csbibpu"><path class="n-5fhjb9j"/><circle class="d11-3pbkv"/></g>`,
		"fallback": "emojione:warning",
	});
}

export default Component;
