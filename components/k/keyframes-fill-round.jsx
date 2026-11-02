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
		"content": `<style>.bgjq24bqv {
  fill: currentColor;
  d: path("m13.707 8.293l2 2a2.414 2.414 0 0 1 0 3.414l-2 2a2.414 2.414 0 0 1-3.414 0l-2-2a2.414 2.414 0 0 1 0-3.414l2-2a2.414 2.414 0 0 1 3.414 0m-10 3.414a.414.414 0 0 0 0 .586l2 2a.999.999 0 1 1-1.414 1.414l-2-2a2.414 2.414 0 0 1 0-3.414l2-2a.999.999 0 1 1 1.414 1.414Zm18-1.414a2.414 2.414 0 0 1 0 3.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a.414.414 0 0 0 0-.586l-2-2a1 1 0 0 1 1.414-1.414Z");
}
</style><path class="bgjq24bqv"/>`,
		"fallback": "coolicons:keyframes-fill-round",
	});
}

export default Component;
