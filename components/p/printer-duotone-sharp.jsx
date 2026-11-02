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

.p8m92-sax {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2 7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm8 5h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2");
}

.vfdekdr8j {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 17H3V7h18v10h-3M6 7V3h12v4m-8 4h4m-8 4h12v6H6Z");
}
</style><g class="ft5dv1b6b"><path class="p8m92-sax"/><path class="vfdekdr8j"/></g>`,
		"fallback": "coolicons:printer-duotone-sharp",
	});
}

export default Component;
