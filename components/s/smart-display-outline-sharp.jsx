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
		"content": `<style>.rnizpcb2q {
  fill: currentColor;
  d: path("M10 15.577L15.577 12L10 8.423zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="rnizpcb2q"/>`,
		"fallback": "material-symbols-light:smart-display-outline-sharp",
	});
}

export default Component;
