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
		"content": `<style>.ldvkixb4d {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 0 2h-2v2h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1.382l.276.553a1 1 0 1 1-1.788.894L15.382 20H8.618l-.724 1.447a1 1 0 1 1-1.788-.894L6.382 20H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6V4H9a1 1 0 0 1 0-2ZM6 8v4h12V8Zm3.01 7H9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M15 15a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="ldvkixb4d"/>`,
		"fallback": "coolicons:tram-fill-sharp",
	});
}

export default Component;
