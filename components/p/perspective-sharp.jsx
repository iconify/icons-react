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
		"content": `<style>.bhcr7ybde {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 1V12M12 12V23M12 12H1M12 12H23M5 8V16L19 20V5L5 8Z");
}
</style><path class="bhcr7ybde"/>`,
		"fallback": "keyline-icons:perspective-sharp",
	});
}

export default Component;
