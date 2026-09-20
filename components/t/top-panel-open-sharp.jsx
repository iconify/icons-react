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
		"content": `<style>.jwc8sqbzn {
  fill: currentColor;
  d: path("m12 16.5l4-4H8zM5 19h14v-9H5zm-2 2V3h18v18z");
}
</style><path class="jwc8sqbzn"/>`,
		"fallback": "material-symbols:top-panel-open-sharp",
	});
}

export default Component;
