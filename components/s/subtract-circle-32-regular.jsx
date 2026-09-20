import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lmvg4na9w {
  fill: currentColor;
  d: path("M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16s5.373 12 12 12s12-5.373 12-12m2 0c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14m-20-1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z");
}
</style><path class="lmvg4na9w"/>`,
		"fallback": "fluent:subtract-circle-32-regular",
	});
}

export default Component;
