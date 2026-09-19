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
		"content": `<style>.jw4g2gbsr {
  fill: currentColor;
  d: path("m21 5l-9-4l-9 4v6c0 5.55 3.84 10.74 9 12c2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12a4.994 4.994 0 0 1-6.29-.64a5.003 5.003 0 0 1 0-7.07a5.003 5.003 0 0 1 7.07 0a5.006 5.006 0 0 1 .64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11z");
}

.v4i2ew1ke {
  cx: 12px;
  cy: 12px;
  r: 3px;
  fill: currentColor;
}
</style><path class="jw4g2gbsr"/><circle class="v4i2ew1ke"/>`,
		"fallback": "ic:sharp-policy",
	});
}

export default Component;
