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
		"content": `<style>.zob0y8uqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21H4a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 4 3h16a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 20 21h-6M9.5 3v10m-7 0h7m0-4h12M12 8.75l2.75-5.5m1 5.5l2.75-5.5m.75 5.5l2-4");
}
</style><path class="zob0y8uqc"/>`,
		"fallback": "uix-sharp:store-floor-plan-zones",
	});
}

export default Component;
