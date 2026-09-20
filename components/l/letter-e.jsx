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
		"content": `<style>.ky2rktbfr {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M98.89 36.51c1.23 0 2.24-1 2.24-2.24V17.55c0-1.24-1.01-2.24-2.24-2.24H29.1c-1.24 0-2.24 1-2.24 2.24v100.97c0 1.24 1 2.24 2.24 2.24h69.8c1.23 0 2.24-1 2.24-2.24V101.8c0-1.24-1.01-2.24-2.24-2.24H53.24V77.51h35.12c1.23 0 2.24-1 2.24-2.24V58.55c0-1.24-1.01-2.24-2.24-2.24H53.24v-19.8z");
}
</style><path class="ky2rktbfr"/>`,
		"fallback": "noto:letter-e",
	});
}

export default Component;
