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
		"content": `<style>.vcwx1uvoi {
  fill: currentColor;
  d: path("M3 14V3h11v11zm5-2.25L6.8 10.1L5.385 12h6.23L9.7 9.5zm6.73 8.522q-.73-.729-.73-1.77t.73-1.771Q15.457 16 16.5 16q.448 0 .82.146t.68.413V11h3v1h-2v6.5q0 1.042-.728 1.77q-.729.73-1.77.73t-1.771-.728");
}
</style><path class="vcwx1uvoi"/>`,
		"fallback": "material-symbols-light:stock-media-sharp",
	});
}

export default Component;
