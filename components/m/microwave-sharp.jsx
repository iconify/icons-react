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
		"content": `<style>.fwcwhebpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v14H3Zm4 14v2m10-2v2m0-12v6M7 8h6v6H7Z");
}
</style><path class="fwcwhebpf"/>`,
		"fallback": "coolicons:microwave-sharp",
	});
}

export default Component;
