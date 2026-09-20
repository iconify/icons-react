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
		"content": `<style>.dbluobbon {
  fill: currentColor;
  d: path("M16 21H3V3h18v13zm-1-2v-4h4V5H5v14zm-4-3h2v-6h3V8H8v2h3zm-6 3V5z");
}
</style><path class="dbluobbon"/>`,
		"fallback": "material-symbols:sticky-note-outline-sharp",
	});
}

export default Component;
