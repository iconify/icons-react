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
		"content": `<style>.d5ed1y2-d {
  fill: currentColor;
  d: path("M11.5 16.5h1v-4h4v-1h-4v-4h-1v4h-4v1h4zM12 21q-1.868 0-3.51-.708t-2.857-1.924t-1.924-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709t2.859 1.924t1.925 2.857T21 12v9z");
}
</style><path class="d5ed1y2-d"/>`,
		"fallback": "material-symbols-light:loupe-sharp",
	});
}

export default Component;
