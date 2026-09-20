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
		"content": `<style>.favijcu8e {
  fill: currentColor;
  d: path("M3.075 20.925v-1.4l16.45-16.45h1.425v1.4L4.475 20.925zM3 14.7v-2.8L11.9 3h2.8zM3 7V3h4zm14 14l4-4v4zm-7.7 0L21 9.3v2.8L12.1 21z");
}
</style><path class="favijcu8e"/>`,
		"fallback": "material-symbols:texture-sharp",
	});
}

export default Component;
