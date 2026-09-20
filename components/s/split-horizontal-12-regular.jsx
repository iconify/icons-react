import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a_wml8hwt {
  fill: currentColor;
  d: path("M11 5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5m-1-3V4H9V2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V4H2V2.5A1.5 1.5 0 0 1 3.5 1h5A1.5 1.5 0 0 1 10 2.5m-7 6V7H2v1.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5V7H9v1.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5");
}
</style><path class="a_wml8hwt"/>`,
		"fallback": "fluent:split-horizontal-12-regular",
	});
}

export default Component;
