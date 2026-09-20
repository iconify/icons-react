import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cs3q92bdt {
  fill: currentColor;
  d: path("M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 156a52.06 52.06 0 0 1-52 52h-32a52.06 52.06 0 0 1-52-52V80a52.06 52.06 0 0 1 52-52h32a52.06 52.06 0 0 1 52 52ZM132 64v48a4 4 0 0 1-8 0V64a4 4 0 0 1 8 0");
}
</style><path class="cs3q92bdt"/>`,
		"fallback": "ph:mouse-simple-thin",
	});
}

export default Component;
