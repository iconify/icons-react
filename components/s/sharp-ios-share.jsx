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
		"content": `<style>.pj6ewyu5x {
  fill: currentColor;
  d: path("M11 16h2V5h3l-4-4l-4 4h3z");
}

.uxdrrybsz {
  fill: currentColor;
  d: path("M20 8h-5v2h3v11H6V10h3V8H4v15h16z");
}
</style><path class="uxdrrybsz"/><path class="pj6ewyu5x"/>`,
		"fallback": "ic:sharp-ios-share",
	});
}

export default Component;
