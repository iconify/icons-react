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
		"content": `<style>.kmrd2btws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5h12l2 8H4Zm6 8v6m-4 0h8M5 9h14m-9-4l-1 8m5-8l1 8");
}
</style><path class="kmrd2btws"/>`,
		"fallback": "coolicons:solar-panel-sharp",
	});
}

export default Component;
