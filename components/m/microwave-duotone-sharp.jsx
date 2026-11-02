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
		"content": `<style>.d-9wrobuo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2 18V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1");
}

.ft5dv1b6b {
  fill: none;
}

.pt76yobaa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v14H3Zm4 14v2m10-2v2m0-12v6M7 8h6v6H7Z");
}
</style><g class="ft5dv1b6b"><path class="d-9wrobuo"/><path class="pt76yobaa"/></g>`,
		"fallback": "coolicons:microwave-duotone-sharp",
	});
}

export default Component;
