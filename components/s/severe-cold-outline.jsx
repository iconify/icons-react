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
		"content": `<style>.tymom_bwx {
  fill: currentColor;
  d: path("M20 10q-.425 0-.712-.288T19 9t.288-.712T20 8t.713.288T21 9t-.288.713T20 10M10 22v-3.6L7.4 21L6 19.6l4-4V14H8.4l-4 4L3 16.6L5.6 14H2v-2h3.6L3 9.4L4.4 8l4 4H10v-1.6l-4-4L7.4 5L10 7.6V4h2v3.6L14.6 5L16 6.4l-4 4V12h8v2h-3.6l2.6 2.6l-1.4 1.4l-4-4H12v1.6l4 4l-1.4 1.4l-2.6-2.6V22zm9-15V2h2v5z");
}
</style><path class="tymom_bwx"/>`,
		"fallback": "material-symbols:severe-cold-outline",
	});
}

export default Component;
