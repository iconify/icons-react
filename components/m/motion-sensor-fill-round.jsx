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
		"content": `<style>.kyaqquqiv {
  fill: currentColor;
  d: path("M4 3h16a1 1 0 0 1 0 2h-2.082A6.002 6.002 0 0 1 6.082 5H4a1 1 0 0 1 0-2m14.6 9.8A10.97 10.97 0 0 1 12 15a11 11 0 0 1-3.437-.55A10.9 10.9 0 0 1 5.4 12.8a1 1 0 0 1 1.2-1.6A8.96 8.96 0 0 0 12 13a8.96 8.96 0 0 0 5.4-1.8a1.002 1.002 0 0 1 1.569.552A1 1 0 0 1 18.6 12.8m3 4a16 16 0 0 1-19.2 0a.998.998 0 0 1 .091-1.66a1 1 0 0 1 1.109.06a13.9 13.9 0 0 0 4.025 2.1c1.411.465 2.889.702 4.375.7a14 14 0 0 0 4.375-.7a13.9 13.9 0 0 0 4.025-2.1a1 1 0 0 1 1.2 1.6");
}
</style><path class="kyaqquqiv"/>`,
		"fallback": "coolicons:motion-sensor-fill-round",
	});
}

export default Component;
