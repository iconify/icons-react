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
		"content": `<style>.ccuj2ebdj {
  fill: currentColor;
  d: path("M2 20V4h20v16zM4 8h16V6H4zm11.775 6.075L20 10.525V10H4v1.225z");
}
</style><path class="ccuj2ebdj"/>`,
		"fallback": "material-symbols:wallet-outline-sharp",
	});
}

export default Component;
