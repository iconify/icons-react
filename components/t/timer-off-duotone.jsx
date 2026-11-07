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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.gjndpbbbf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.432 6.432a8 8 0 1 0 11.137 11.137M20 13a8 8 0 0 0-8-8m-2-2h4m-2 0v2m6 2l2-2M3 2l19 19");
}

.h4rg4j2_u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 5a8 8 0 0 1 8 8Zm6.568 12.568A7.998 7.998 0 0 1 4.164 14.61a8 8 0 0 1 3.268-8.178Z");
}
</style><g class="ft5dv1b6b"><path class="h4rg4j2_u"/><path class="gjndpbbbf"/></g>`,
		"fallback": "coolicons:timer-off-duotone",
	});
}

export default Component;
