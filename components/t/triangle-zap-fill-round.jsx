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
		"content": `<style>.jsfmnxbtd {
  fill: currentColor;
  d: path("m15.84 5.153l5.5 9A4.5 4.5 0 0 1 17.5 21h-11a4.5 4.5 0 0 1-3.84-6.847l5.5-9a4.502 4.502 0 0 1 7.68 0M12.414 13l1.293-1.293a.999.999 0 1 0-1.414-1.414l-3 3A1 1 0 0 0 10 15h1.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3A1 1 0 0 0 14 13Z");
}
</style><path class="jsfmnxbtd"/>`,
		"fallback": "coolicons:triangle-zap-fill-round",
	});
}

export default Component;
