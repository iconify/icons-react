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
		"content": `<style>.a7uuy418c {
  fill: currentColor;
  d: path("M11.04 12.04q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m-6 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m9 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23M4.616 19.462V18H3V5h18v13h-1.616v1.462h-.5L18.37 18H5.675l-.56 1.462z");
}
</style><path class="a7uuy418c"/>`,
		"fallback": "material-symbols-light:tv-with-assistant-sharp",
	});
}

export default Component;
