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
		"content": `<style>.oq_onlbhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 17H2.5V2.5H17V13M6 7h7.5M6 11h5m7.25 7.25h.01m-2.51-2.5a3.5 3.5 0 0 0 0 5m5-5a3.5 3.5 0 0 1 0 5");
}
</style><path class="oq_onlbhc"/>`,
		"fallback": "uix-sharp:live-blog",
	});
}

export default Component;
