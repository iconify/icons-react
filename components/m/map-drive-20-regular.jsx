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
		"content": `<style>.e4mh2vh8o {
  fill: currentColor;
  d: path("M14.75 6.744a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3.5a.5.5 0 0 1-.5.5h-7v2h1a.5.5 0 0 1 .5.5V13h1.498a.5.5 0 0 1 .5.5v1H17.5a.5.5 0 0 1 0 1h-3.502v1a.5.5 0 0 1-.5.5H6.502a.5.5 0 0 1-.5-.5v-1H2.5a.5.5 0 0 1 0-1h3.502v-1a.5.5 0 0 1 .5-.5H8v-1.5a.5.5 0 0 1 .5-.5h1V9h-7a.5.5 0 0 1-.5-.5zm2-1a1 1 0 0 0-1 1v3h14V5a1 1 0 0 0-1-1zm7.47 12h1.528v-2H11.5a.5.5 0 0 1-.5-.5V12H9v1.5a.5.5 0 0 1-.5.5H7.002v2z");
}
</style><path class="e4mh2vh8o"/>`,
		"fallback": "fluent:map-drive-20-regular",
	});
}

export default Component;
