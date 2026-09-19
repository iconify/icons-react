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
		"content": `<style>.d06qv65br {
  fill: currentColor;
  d: path("M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v14h7.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7m0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}

.ph-t8r_vp {
  fill: currentColor;
  d: path("M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z");
}
</style><path class="d06qv65br"/><path class="ph-t8r_vp"/>`,
		"fallback": "ic:sharp-auto-delete",
	});
}

export default Component;
