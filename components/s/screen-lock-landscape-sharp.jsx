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
		"content": `<style>.e4pbclb9m {
  fill: currentColor;
  d: path("M2 18V6h20v12zm3.5-1h13V7h-13zm3.73-1.346v-4.538h1.02v-1q0-.749.51-1.26q.511-.51 1.26-.51t1.258.51t.51 1.26v1h.981v4.538zm1.79-4.538h2v-1q0-.425-.288-.713t-.713-.288t-.712.288t-.288.713z");
}
</style><path class="e4pbclb9m"/>`,
		"fallback": "material-symbols-light:screen-lock-landscape-sharp",
	});
}

export default Component;
