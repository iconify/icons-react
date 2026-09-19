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
		"content": `<style>.imgpjccuu {
  fill: currentColor;
  d: path("M18 8h-3v2h3v11H6V10h3V8H6c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2h12c1.1 0 2-.9 2-2V10a2 2 0 0 0-2-2");
}

.pj6ewyu5x {
  fill: currentColor;
  d: path("M11 16h2V5h3l-4-4l-4 4h3z");
}
</style><path class="imgpjccuu"/><path class="pj6ewyu5x"/>`,
		"fallback": "ic:twotone-ios-share",
	});
}

export default Component;
