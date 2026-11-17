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
		"content": `<style>.fbtuq160g {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v16H4Zm0 11h16");
}

.ft5dv1b6b {
  fill: none;
}

.xe3c-hbgx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 15h16v5H4Z");
}
</style><g class="ft5dv1b6b"><path class="xe3c-hbgx"/><path class="fbtuq160g"/></g>`,
		"fallback": "coolicons:panel-bottom-duotone-sharp",
	});
}

export default Component;
