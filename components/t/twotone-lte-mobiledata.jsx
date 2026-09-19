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
		"content": `<style>.qsu1xmbgs {
  fill: currentColor;
  d: path("M6 14h3v2H4V8h2zm3-4h2v6h2v-6h2V8H9zm12 0V8h-5v8h5v-2h-3v-1h3v-2h-3v-1z");
}
</style><path class="qsu1xmbgs"/>`,
		"fallback": "ic:twotone-lte-mobiledata",
	});
}

export default Component;
