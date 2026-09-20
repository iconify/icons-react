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
		"content": `<style>.mq1o3xtmm {
  fill: currentColor;
  d: path("m8.85 6l-2-2H21v2zM22 19l-8-7.85V8h8zm-2.2 3.6L17.2 20H14v-3.2l-8-8V17h6v3H2v-3h2V6.8L1.4 4.2l1.4-1.4l18.4 18.4z");
}
</style><path class="mq1o3xtmm"/>`,
		"fallback": "material-symbols:phonelink-off-sharp",
	});
}

export default Component;
