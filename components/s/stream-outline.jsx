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
		"content": `<style>.waysezjwf {
  fill: currentColor;
  d: path("M2.588 13.413Q2 12.825 2 12t.588-1.412T4 10t1.413.588T6 12t-.587 1.413T4 14t-1.412-.587M5.65 19.7l-1.4-1.4l4.35-4.35l1.4 1.4zm3-9.7L4.3 5.65l1.4-1.4l4.35 4.35zm1.938 11.413Q10 20.825 10 20t.588-1.412T12 18t1.413.588T14 20t-.587 1.413T12 22t-1.412-.587m0-16Q10 4.825 10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6t-1.412-.587m4.762 4.637l-1.4-1.45l4.4-4.35l1.4 1.4zm3 9.65L14 15.35l1.4-1.4l4.35 4.35zm.238-6.287Q18 12.825 18 12t.588-1.412T20 10t1.413.588T22 12t-.587 1.413T20 14t-1.412-.587");
}
</style><path class="waysezjwf"/>`,
		"fallback": "material-symbols:stream-outline",
	});
}

export default Component;
