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
		"content": `<style>.avm00-dxd {
  fill: currentColor;
  d: path("M13 17v-3h2v1h3v-2h-5V7h7v3h-2V9h-3v2h5v6zM4 7h7v2H6v2h4v2H6v2h5v2H4z");
}
</style><path class="avm00-dxd"/>`,
		"fallback": "material-symbols:language-spanish-sharp",
	});
}

export default Component;
