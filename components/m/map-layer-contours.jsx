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
		"content": `<style>.lhzhk1kgw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 13q0-4.561 2.692-7.563Q7.799 2.25 12.5 2.25q9.25 0 9.25 7.75q0 11.75-7.25 11.75q-12.25 0-12.25-8.75m7.204-6.292Q7.5 8.357 7.5 11q0 5.25 6.25 5.25Q19 16.25 19 10q0-4.75-5.5-4.75q-2.318 0-4.046 1.458");
}
</style><path class="lhzhk1kgw"/>`,
		"fallback": "uix-solid:map-layer-contours",
	});
}

export default Component;
