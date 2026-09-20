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
		"content": `<style>.prx_zibmv {
  fill: currentColor;
  d: path("M4 15.5h7v-7H4zm9 2H2v-11h11V11h9v2h-9zM7.5 12");
}
</style><path class="prx_zibmv"/>`,
		"fallback": "material-symbols:line-start-square-outline",
	});
}

export default Component;
