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
		"content": `<style>.zmwrk2blg {
  fill: currentColor;
  d: path("M6.257 13.743a6 6 0 1 1 7.486-7.486a6 6 0 1 1-7.486 7.486M3.5 8A4.5 4.5 0 0 0 6 12.032V12a6 6 0 0 1 6.032-6A4.5 4.5 0 0 0 3.5 8m4.468 6A4.5 4.5 0 1 0 14 7.968V8a6 6 0 0 1-6 6z");
}
</style><path class="zmwrk2blg"/>`,
		"fallback": "fluent:photo-filter-20-filled",
	});
}

export default Component;
