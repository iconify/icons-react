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
		"content": `<style>.nd33ie8qr {
  fill: currentColor;
  d: path("M4 4H2V2h4v20H4zm3 18V2h13v20zm2-11.475q.45-.275.95-.4T11 10h5q.55 0 1.05.125t.95.4V4H9zm3.088-2.113Q11.5 7.825 11.5 7t.588-1.412T13.5 5t1.413.588T15.5 7t-.587 1.413T13.5 9t-1.412-.587M12.5 19h2v-2h2v-2h-2v-2h-2v2h-2v2h2z");
}
</style><path class="nd33ie8qr"/>`,
		"fallback": "material-symbols:ward-sharp",
	});
}

export default Component;
