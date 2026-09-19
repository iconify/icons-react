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
		"content": `<style>.mw_eh8bqc {
  fill: currentColor;
  d: path("M21 6H3v12h18zm-2 10H5V8h14z");
}
</style><path class="mw_eh8bqc"/>`,
		"fallback": "ic:sharp-crop-3-2",
	});
}

export default Component;
