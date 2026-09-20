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
		"content": `<style>.rdfg-lpcu {
  fill: currentColor;
  d: path("M8 9.975h2v7.175l1.55-1.55L13 17l-4 4l-4-4l1.45-1.4L8 17.15zm8 4h-2V6.8l-1.6 1.6L11 7l4-4l4 4l-1.4 1.4L16 6.8z");
}
</style><path class="rdfg-lpcu"/>`,
		"fallback": "material-symbols:mobiledata-arrows-sharp",
	});
}

export default Component;
