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
		"content": `<style>.mkpdywbcb {
  fill: currentColor;
  d: path("M2 22V8h20v14zm8-3l6-4l-6-4zM4 7V5h16v2zm3-3V2h10v2z");
}
</style><path class="mkpdywbcb"/>`,
		"fallback": "material-symbols:subscriptions-sharp",
	});
}

export default Component;
