import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cdfnqyfsu {
  fill: currentColor;
  d: path("M9 3a2.5 2.5 0 0 0 0 5h1V3zm2 0v10.5a.5.5 0 0 1-1 0V9H9a3.5 3.5 0 1 1 0-7h4.5a.5.5 0 0 1 0 1H13v10.5a.5.5 0 0 1-1 0V3zM2.146 6.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708L3.293 8L2.146 6.854a.5.5 0 0 1 0-.708");
}
</style><path class="cdfnqyfsu"/>`,
		"fallback": "fluent:text-paragraph-direction-right-16-regular",
	});
}

export default Component;
