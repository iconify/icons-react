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
		"content": `<style>.jlhtppbji {
  fill: currentColor;
  d: path("M8 3h8a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5m2.707 6.207a.999.999 0 1 0-1.414-1.414l-2 2a.997.997 0 0 0 0 1.414l2 2a.999.999 0 1 0 1.414-1.414L9.414 10.5Zm6 .586l-2-2a.999.999 0 1 0-1.414 1.414l1.293 1.293l-1.293 1.293a.999.999 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414M9 19h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="jlhtppbji"/>`,
		"fallback": "coolicons:monitor-code-fill-round",
	});
}

export default Component;
