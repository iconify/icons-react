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
		"content": `<style>.l_tl-rbkf {
  fill: currentColor;
  d: path("M3 17h12a1 1 0 0 1 .117 1.993L15 19H3a1 1 0 0 1-.117-1.993zh12zm0-4h18a1 1 0 0 1 .117 1.993L21 15H3a1 1 0 0 1-.117-1.993zh18zm0-4h18a1 1 0 0 1 .117 1.993L21 11H3a1 1 0 0 1-.117-1.993zh18zm0-4h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993zh18z");
}
</style><path class="l_tl-rbkf"/>`,
		"fallback": "fluent:text-description-ltr-24-filled",
	});
}

export default Component;
