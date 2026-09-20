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
		"content": `<style>.a5k237bna {
  fill: currentColor;
  d: path("M12 20v-2h3l4.5-6L15 6H4v5H2V4h14l6 8l-6 8zm-7 1v-3H2v-2h3v-3h2v3h3v2H7v3z");
}
</style><path class="a5k237bna"/>`,
		"fallback": "material-symbols:new-label-outline-sharp",
	});
}

export default Component;
