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
		"content": `<style>.o4j75xs4y {
  fill: currentColor;
  d: path("M12 17h2V7h-4v2h2zm9 4H3V3h18zM5 19h14V5H5zM5 5v14z");
}
</style><path class="o4j75xs4y"/>`,
		"fallback": "material-symbols:looks-one-outline-sharp",
	});
}

export default Component;
