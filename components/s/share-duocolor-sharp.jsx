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
		"content": `<style>.dwo5v8b9w {
  stroke-opacity: 0.4;
  d: path("m15 6l-3-3l-3 3m3-3v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xj80qmbeu {
  d: path("M7 10H4v11h16V10h-3");
}
</style><g class="nrj6p8qat"><path class="dwo5v8b9w"/><path class="xj80qmbeu"/></g>`,
		"fallback": "coolicons:share-duocolor-sharp",
	});
}

export default Component;
