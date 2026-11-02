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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qyxqzrb2b {
  d: path("M12 3h8v7c0 5.5-3.5 9-8 11c-4.5-2-8-5.5-8-11V3z");
}

.v76oqf2nx {
  stroke-opacity: 0.4;
  d: path("M10 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 9a4.167 4.167 0 0 1 8 0");
}
</style><g class="nrj6p8qat"><path class="v76oqf2nx"/><path class="qyxqzrb2b"/></g>`,
		"fallback": "coolicons:shield-user-duocolor-sharp",
	});
}

export default Component;
