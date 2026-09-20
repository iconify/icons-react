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
		"content": `<style>.htsz9iwyu {
  fill: currentColor;
  d: path("m12 18.27l-5.308-5.308l.708-.708l4.6 4.594l4.6-4.594l.708.707zm0-5.962L6.692 7l.708-.708l4.6 4.595l4.6-4.595l.708.708z");
}
</style><path class="htsz9iwyu"/>`,
		"fallback": "material-symbols-light:stat-minus-2-outline",
	});
}

export default Component;
