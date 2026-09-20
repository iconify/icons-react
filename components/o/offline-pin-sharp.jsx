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
		"content": `<style>.diebjs8dh {
  fill: currentColor;
  d: path("M8 17h8v-2H8zm2.95-3l5.65-5.65l-1.425-1.375L10.95 11.2L8.8 9.05l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="diebjs8dh"/>`,
		"fallback": "material-symbols:offline-pin-sharp",
	});
}

export default Component;
