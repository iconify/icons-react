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
		"content": `<style>.xykas6b-v {
  fill: currentColor;
  d: path("M20.873 7.713L14.586 14H9.414L3.127 7.713l8.318-5.545a1 1 0 0 1 1.11 0ZM22 9.414V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.414l6.293 6.293A1 1 0 0 0 9 16h6c.265 0 .52-.105.707-.293Z");
}
</style><path class="xykas6b-v"/>`,
		"fallback": "coolicons:mail-open-fill-sharp",
	});
}

export default Component;
