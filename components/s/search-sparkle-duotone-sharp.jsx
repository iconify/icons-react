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

.twmzk4eiv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 17a7 7 0 1 1 0-14a7 7 0 0 1 0 14m4-7c-2.005-.002-3.998-1.995-4-4c-.002 2.005-1.995 3.998-4 4c2.005.002 3.998 1.995 4 4c.002-2.005 1.995-3.998 4-4");
}

.utxjkrwff {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 0 0-14 0m12 5l6 6M10 6c0 2 2 4 4 4c-2 0-4 2-4 4c0-2-2-4-4-4c2 0 4-2 4-4");
}
</style><g class="ft5dv1b6b"><path class="twmzk4eiv"/><path class="utxjkrwff"/></g>`,
		"fallback": "coolicons:search-sparkle-duotone-sharp",
	});
}

export default Component;
