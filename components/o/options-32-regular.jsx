import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k2ict5_3l {
  fill: currentColor;
  d: path("M11.5 19.5a4.5 4.5 0 0 1 4.389 3.5H29a1 1 0 1 1 0 2H15.889a4.502 4.502 0 0 1-8.778 0H3a1 1 0 1 1 0-2h4.111a4.5 4.5 0 0 1 4.389-3.5m0 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m9-18A4.5 4.5 0 0 1 24.889 7H29a1 1 0 1 1 0 2h-4.111a4.502 4.502 0 0 1-8.778 0H3a1 1 0 0 1 0-2h13.111A4.5 4.5 0 0 1 20.5 3.5m0 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5");
}
</style><path class="k2ict5_3l"/>`,
		"fallback": "fluent:options-32-regular",
	});
}

export default Component;
