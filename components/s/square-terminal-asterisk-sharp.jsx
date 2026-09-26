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

.igwgci3rb {
  d: path("M10 6.4648L10 13.5352M6.5547 12.2968L13.4453 7.7032M6.5547 7.7032L13.4453 12.2968M12 17L18 17");
}

.x-_5ilohg {
  d: path("M3 3L21 3L21 21L3 21L3 3Z");
}
</style><g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="igwgci3rb"/></g>`,
		"fallback": "keyline-icons:square-terminal-asterisk-sharp",
	});
}

export default Component;
