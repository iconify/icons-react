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
		"content": `<style>.ez_4cl6eg {
  fill: currentColor;
  d: path("M8 4.465a1 1 0 0 0-1.576-.818L1.412 7.183a1 1 0 0 0 0 1.634l5.012 3.536A1 1 0 0 0 8 11.536V9.232l4.424 3.12A1 1 0 0 0 14 11.537V4.465a1 1 0 0 0-1.576-.818L8 6.768zm0 3.543v-.016l5-3.527v7.07zm-1 3.528L1.988 8L7 4.465z");
}
</style><path class="ez_4cl6eg"/>`,
		"fallback": "fluent:rewind-16-regular",
	});
}

export default Component;
