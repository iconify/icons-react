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
		"content": `<style>.zu-parbub {
  fill: currentColor;
  d: path("M2 17V7a1 1 0 0 1 1.781-.625L7 10.399l3.219-4.024A1.002 1.002 0 0 1 12 7v10a1 1 0 0 1-2 0V9.851l-2.219 2.774a1 1 0 0 1-1.562 0L4 9.851V17a1 1 0 0 1-2 0M19 7v7.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L17 14.586V7a1 1 0 0 1 2 0");
}
</style><path class="zu-parbub"/>`,
		"fallback": "coolicons:markdown-fill-sharp",
	});
}

export default Component;
