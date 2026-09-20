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
		"content": `<style>.etx6lfb3j {
  d: path("M2 9h4");
}

.ge7jckuff {
  d: path("M12 4h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3V7l3 -3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w_wdpd6av {
  fill: currentColor;
  d: path("M12 4h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3V7l3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xw-kcgifr {
  d: path("M18 15h4");
}
</style><g class="nrj6p8qat"><path class="w_wdpd6av"/><path class="ge7jckuff"/><path class="etx6lfb3j"/><path class="xw-kcgifr"/></g>`,
		"fallback": "iconmind:mcp-stdio-duotone-regular",
	});
}

export default Component;
