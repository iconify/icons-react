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
		"content": `<style>.ypu1d9r4o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1");
}
</style><path class="ypu1d9r4o"/>`,
		"fallback": "ic:round-horizontal-rule",
	});
}

export default Component;
