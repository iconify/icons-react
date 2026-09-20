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
		"content": `<style>.rsvx4yd-r {
  fill: currentColor;
  d: path("M15.648 2.007L15.75 2a.75.75 0 0 1 .743.648l.007.102v18.5a.75.75 0 0 1-1.493.102L15 21.25v-1.254H9.25A2.25 2.25 0 0 1 7 17.746V6.25A2.25 2.25 0 0 1 9.25 4L15 3.999V2.75a.75.75 0 0 1 .648-.743L15.75 2z");
}
</style><path class="rsvx4yd-r"/>`,
		"fallback": "fluent:notebook-section-24-filled",
	});
}

export default Component;
