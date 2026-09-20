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
		"content": `<style>.mf866whlh {
  fill: currentColor;
  d: path("M7 2.5V4H2.5a.5.5 0 0 0-.5.5v10A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-10a.5.5 0 0 0-.5-.5H13V2.5A1.5 1.5 0 0 0 11.5 1h-3A1.5 1.5 0 0 0 7 2.5M8.5 2h3a.5.5 0 0 1 .5.5V4H8V2.5a.5.5 0 0 1 .5-.5m-2 8V7h3v3zm0 4v-3h3v3zm7-4h-3V7h3zm-3 4v-3h3v3z");
}
</style><path class="mf866whlh"/>`,
		"fallback": "fluent:store-microsoft-20-filled",
	});
}

export default Component;
