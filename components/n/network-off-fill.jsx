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
		"content": `<style>.cqc4mxvts {
  fill: currentColor;
  d: path("m5.707 1.293l17 17A1 1 0 0 1 22 20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h.586l-2-2H8a.997.997 0 0 0-1 1v1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1v-1a3 3 0 0 1 3-3h4.586l-2-2H10a2 2 0 0 1-2-2v-.586L4.293 2.707a.999.999 0 1 1 1.414-1.414M11.243 4L9.351 2.108A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v3c0 .472-.166.927-.47 1.288Z");
}
</style><path class="cqc4mxvts"/>`,
		"fallback": "coolicons:network-off-fill",
	});
}

export default Component;
