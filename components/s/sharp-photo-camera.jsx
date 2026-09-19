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
		"content": `<style>.se8mzsbii {
  fill: currentColor;
  d: path("M9 2L7.17 4H2v16h20V4h-5.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}

.v4i2ew1ke {
  cx: 12px;
  cy: 12px;
  r: 3px;
  fill: currentColor;
}
</style><circle class="v4i2ew1ke"/><path class="se8mzsbii"/>`,
		"fallback": "ic:sharp-photo-camera",
	});
}

export default Component;
