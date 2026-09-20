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
		"content": `<style>.ax_5wmfhj {
  fill: currentColor;
  d: path("M8.475 23L1.2 12.375l1.725-1.65L7 13.575V3h2v9h2V1h2v11h2V2h2v10h2V4h2v19z");
}
</style><path class="ax_5wmfhj"/>`,
		"fallback": "material-symbols:pan-tool-sharp",
	});
}

export default Component;
