import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f0l74ubxj {
  fill: var(--svg-color--ed6c30, #ed6c30);
  d: path("M64 .57C28.96.57.57 28.97.57 64c0 35.04 28.39 63.43 63.43 63.43c35.02 0 63.43-28.4 63.43-63.43S99.02.57 64 .57M15.58 76.53V51.47h96.83v25.05H15.58z");
}

.tp37llbfn {
  fill: var(--svg-color--fff, #fff);
  d: path("M15.58 51.47h96.83v25.05H15.58z");
}
</style><path class="tp37llbfn"/><path class="f0l74ubxj"/>`,
		"fallback": "noto-v1:no-entry",
	});
}

export default Component;
