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
		"content": `<style>.aje1izkvj {
  fill: currentColor;
  d: path("M3 21V3h11v2H5v14h14v-9h2v11H3Zm9-5l-1.25-2.75L8 12l2.75-1.25L12 8l1.25 2.75L16 12l-2.75 1.25L12 16Zm5-6l-.95-2.05L14 7l2.05-.95L17 4l.95 2.05L20 7l-2.05.95L17 10Z");
}
</style><path class="aje1izkvj"/>`,
		"fallback": "material-symbols:photo-filter-sharp",
	});
}

export default Component;
