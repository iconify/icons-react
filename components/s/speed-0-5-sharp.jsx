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
		"content": `<style>.fl_go2b-w {
  fill: currentColor;
  d: path("M7.75 16.5v-1h1v1zm2.5 0v-1h4v-3h-4v-5h5v1h-4v3h4v5z");
}
</style><path class="fl_go2b-w"/>`,
		"fallback": "material-symbols-light:speed-0-5-sharp",
	});
}

export default Component;
