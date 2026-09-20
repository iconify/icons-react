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
		"content": `<style>.jqgwu_b0k {
  fill: currentColor;
  d: path("M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M11 19.9v-3q-1.5-.3-2.55-1.35T7.1 13h-3q.3 2.725 2.238 4.625T11 19.9m2 0q2.725-.3 4.663-2.237T19.9 13h-3q-.3 1.5-1.35 2.55T13 16.9zM4.1 11H7l3-3h4l3 3h2.9q-.375-3.025-2.625-5.012T12 4T6.725 5.988T4.1 11");
}
</style><path class="jqgwu_b0k"/>`,
		"fallback": "material-symbols:search-hands-free",
	});
}

export default Component;
