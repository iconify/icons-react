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
		"content": `<style>.hkxyq6jya {
  fill: currentColor;
  d: path("M7.96 7L10 22h4l2.04-15z");
}

.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}
</style><path class="hkxyq6jya"/><circle class="yfz3w9lrl"/>`,
		"fallback": "ic:sharp-man-4",
	});
}

export default Component;
