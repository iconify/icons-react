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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hgu2a9bpl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18.4449 19.8318L7.9557 12.8318C7.3625 12.4359 7.3625 11.5641 7.9557 11.1682L18.4449 4.1682C19.1094 3.7247 20 4.2011 20 5L20 19C20 19.7989 19.1094 20.2753 18.4449 19.8318Z");
  stroke: none;
}

.ndndk39sy {
  d: path("M5 4L5 20");
}
</style><g class="gp_8x1bzb"><path class="hgu2a9bpl"/><path class="ndndk39sy"/></g>`,
		"fallback": "keyline-icons:skip-back-sharp-duotone",
	});
}

export default Component;
