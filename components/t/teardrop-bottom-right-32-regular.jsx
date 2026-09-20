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
		"content": `<style>.i8jqb_bwx {
  fill: currentColor;
  d: path("M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14v10.75A3.25 3.25 0 0 1 26.75 30H16C8.268 30 2 23.732 2 16M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12h10.75c.69 0 1.25-.56 1.25-1.25V16c0-6.627-5.373-12-12-12");
}
</style><path class="i8jqb_bwx"/>`,
		"fallback": "fluent:teardrop-bottom-right-32-regular",
	});
}

export default Component;
