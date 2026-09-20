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
		"content": `<style>.e1edl9bpw {
  fill: currentColor;
  d: path("M2 18V6h2v12zm14 0l-1.425-1.4l3.6-3.6H6v-2h12.175L14.6 7.4L16 6l6 6z");
}
</style><path class="e1edl9bpw"/>`,
		"fallback": "material-symbols:start",
	});
}

export default Component;
