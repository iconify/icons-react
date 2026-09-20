import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ym1r1ueel {
  fill: currentColor;
  d: path("M9.743 2.071a.5.5 0 0 1 .514 0l6.772 4.063a2 2 0 0 1 .7.709L10 10.934L2.272 6.843c.167-.287.405-.532.699-.709zm3.134 8.472l-2.643 1.399a.5.5 0 0 1-.468 0L2 7.83v5.67A2.5 2.5 0 0 0 4.5 16h6.55a2.5 2.5 0 0 1 2.223-1.99A3 3 0 0 1 12.5 12c0-.529.137-1.026.377-1.457M17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="ym1r1ueel"/>`,
		"fallback": "fluent:mail-open-person-20-filled",
	});
}

export default Component;
