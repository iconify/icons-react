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
		"content": `<style>.h50oiacxa {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 0 2h-2v2h2a5 5 0 0 1 5 5v6a3 3 0 0 1-2.411 2.942l.305.611a1 1 0 1 1-1.788.894L15.382 20H8.618l-.724 1.447a1 1 0 1 1-1.788-.894l.305-.611A3 3 0 0 1 4 17v-6a5 5 0 0 1 5-5h2V4H9a1 1 0 0 1 0-2ZM9 8a3 3 0 0 0-3 3v1h12v-1a3 3 0 0 0-3-3Zm.01 7H9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M15 17h.01a1 1 0 0 0 0-2H15a1 1 0 0 0 0 2");
}
</style><path class="h50oiacxa"/>`,
		"fallback": "coolicons:tram-fill-round",
	});
}

export default Component;
