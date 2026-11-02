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
		"content": `<style>.wdm-kab9m {
  fill: currentColor;
  d: path("m15.84 5.153l5.5 9A4.5 4.5 0 0 1 17.5 21h-11a4.5 4.5 0 0 1-3.84-6.847l5.5-9a4.502 4.502 0 0 1 7.68 0M14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2");
}
</style><path class="wdm-kab9m"/>`,
		"fallback": "coolicons:triangle-minus-fill-round",
	});
}

export default Component;
