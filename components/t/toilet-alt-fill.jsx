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
		"content": `<style>.f1_ncx6ak {
  fill: currentColor;
  d: path("M19 10H5V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Zm1.918 2a6.01 6.01 0 0 1-5.448 4.982l1.458 3.647A.998.998 0 0 1 16 22H8a1 1 0 0 1-.928-1.371l1.458-3.647A6.01 6.01 0 0 1 3.082 12Z");
}
</style><path class="f1_ncx6ak"/>`,
		"fallback": "coolicons:toilet-alt-fill",
	});
}

export default Component;
