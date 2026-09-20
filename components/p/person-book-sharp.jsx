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
		"content": `<style>.ywiv5dbbh {
  fill: currentColor;
  d: path("M8.766 16.91q-1.51.525-2.766 1.475V20h12v-1.616q-1.275-.95-2.775-1.475T12 16.385t-3.234.525M5 21V3h14v18zm9.129-7.794q.871-.871.871-2.129t-.871-2.129T12 8.077t-2.129.871T9 11.077t.871 2.129t2.129.871t2.129-.871");
}
</style><path class="ywiv5dbbh"/>`,
		"fallback": "material-symbols-light:person-book-sharp",
	});
}

export default Component;
