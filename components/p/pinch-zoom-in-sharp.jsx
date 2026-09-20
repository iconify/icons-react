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
		"content": `<style>.b6z9s29mg {
  fill: currentColor;
  d: path("M1.55 12.5L.5 11.45L3.425 8.5H1V7h5v5H4.5V9.575zM7 6V1h1.5v2.45L11.425.5L12.5 1.575L9.55 4.5H12V6zm6.575 17L7.6 17l1.575-1.625l2.825.8V7h2v8h1v-4h2v4h1v-3h2v3h1v-1h2v9z");
}
</style><path class="b6z9s29mg"/>`,
		"fallback": "material-symbols:pinch-zoom-in-sharp",
	});
}

export default Component;
