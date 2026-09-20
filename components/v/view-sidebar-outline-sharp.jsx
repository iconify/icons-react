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
		"content": `<style>.j6exvzlxw {
  fill: currentColor;
  d: path("M2 20V4h20v16zM17.5 8.675H20V6h-2.5zm0 4.65H20v-2.65h-2.5zM4 18h11.5V6H4zm13.5 0H20v-2.675h-2.5z");
}
</style><path class="j6exvzlxw"/>`,
		"fallback": "material-symbols:view-sidebar-outline-sharp",
	});
}

export default Component;
