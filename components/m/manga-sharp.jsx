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
		"content": `<style>.vsfd8mb3b {
  fill: currentColor;
  d: path("M3 19V5h18v14zm5.735-1h10.65q.23 0 .423-.192t.192-.424v-9.84l-3 .975l-2.883-.923l-1.807 2.46l-2.886.938v3.046L7.641 16.5z");
}
</style><path class="vsfd8mb3b"/>`,
		"fallback": "material-symbols-light:manga-sharp",
	});
}

export default Component;
