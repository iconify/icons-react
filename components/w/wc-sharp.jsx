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
		"content": `<style>.vdvs0um5z {
  fill: currentColor;
  d: path("M5.5 22v-7.5H4V7h7v7.5H9.5V22zm.588-16.588Q5.5 4.825 5.5 4t.588-1.412T7.5 2t1.413.588T9.5 4t-.587 1.413T7.5 6t-1.412-.587M15 22v-6h-3l2.95-9h3.1L21 16h-3v6zm.088-16.588Q14.5 4.825 14.5 4t.588-1.412T16.5 2t1.413.588T18.5 4t-.587 1.413T16.5 6t-1.412-.587");
}
</style><path class="vdvs0um5z"/>`,
		"fallback": "material-symbols:wc-sharp",
	});
}

export default Component;
