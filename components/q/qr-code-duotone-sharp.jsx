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

.pm_pojb7j {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h6v6H4Zm10 0h6v6h-6ZM4 14h6v6H4Zm10 0h3m3 0h.01M14 18v2m4-2h2v2");
}

.ravhw60ag {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 4v6H4V4Zm10 0v6h-6V4ZM10 14v6H4v-6Z");
}
</style><g class="ft5dv1b6b"><path class="ravhw60ag"/><path class="pm_pojb7j"/></g>`,
		"fallback": "coolicons:qr-code-duotone-sharp",
	});
}

export default Component;
