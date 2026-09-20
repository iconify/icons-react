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
		"content": `<style>.oydi-sb0n {
  fill: currentColor;
  d: path("m15.825 13l-9-9H21.7l-4.975 9zM7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m13.5 1.3L14.15 17H4.425L6.9 11.95L5.1 7.9L.7 3.5l1.4-1.4l19.8 19.8zm-4.913-1.888Q15 20.826 15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22t-1.412-.587");
}
</style><path class="oydi-sb0n"/>`,
		"fallback": "material-symbols:shopping-cart-off-sharp",
	});
}

export default Component;
