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
		"content": `<style>.wal714huu {
  fill: currentColor;
  d: path("M2 20V4h16v6.5l4-4v11l-4-4V20zm2-2h12V6H4zm0 0V6zm1-2h10l-3.45-4.5l-2.3 3l-1.55-2z");
}
</style><path class="wal714huu"/>`,
		"fallback": "material-symbols:video-camera-back-outline-sharp",
	});
}

export default Component;
