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
		"content": `<style>.cr7e85qlf {
  stroke-opacity: 0.4;
  d: path("M9 8V4h6v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vlattublo {
  d: path("M3 8h18v12H3Zm0 6h18M8 12v4m8-4v4");
}
</style><g class="nrj6p8qat"><path class="cr7e85qlf"/><path class="vlattublo"/></g>`,
		"fallback": "coolicons:toolbox-duocolor-sharp",
	});
}

export default Component;
