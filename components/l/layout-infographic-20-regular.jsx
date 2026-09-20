import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nsm707bfk {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm1.5 5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m4 .5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5m2-1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5m-6 1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M14 6a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z");
}
</style><path class="nsm707bfk"/>`,
		"fallback": "fluent:layout-infographic-20-regular",
	});
}

export default Component;
