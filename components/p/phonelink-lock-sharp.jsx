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
		"content": `<style>.ht6sreb1u {
  fill: currentColor;
  d: path("M14.73 15.654v-4.538h1.02v-1q0-.749.51-1.26q.511-.51 1.26-.51t1.258.51t.51 1.26v1h.981v4.538zm1.79-4.538h2v-1q0-.425-.288-.713t-.713-.288t-.712.288t-.288.713zM6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22z");
}
</style><path class="ht6sreb1u"/>`,
		"fallback": "material-symbols-light:phonelink-lock-sharp",
	});
}

export default Component;
