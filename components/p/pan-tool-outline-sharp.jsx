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
		"content": `<style>.bjl5-ln3e {
  fill: currentColor;
  d: path("M8.475 23L1.2 12.375l1.725-1.65L7 13.575V3h2v14.425l-3.7-2.6L9.525 21H19V4h2v19zM11 12V1h2v11zm4 0V2h2v10zm-2 4.5");
}
</style><path class="bjl5-ln3e"/>`,
		"fallback": "material-symbols:pan-tool-outline-sharp",
	});
}

export default Component;
