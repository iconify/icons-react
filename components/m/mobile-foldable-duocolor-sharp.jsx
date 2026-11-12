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
		"content": `<style>.ietvg-b5k {
  d: path("m3 5l7-2h4l7 2v14l-7 2h-4l-7-2zm3 2h.01");
}

.now253bdc {
  stroke-opacity: 0.4;
  d: path("M12 3v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="now253bdc"/><path class="ietvg-b5k"/></g>`,
		"fallback": "coolicons:mobile-foldable-duocolor-sharp",
	});
}

export default Component;
