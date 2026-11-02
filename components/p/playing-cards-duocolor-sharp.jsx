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
		"content": `<style>.hzf9y-bdg {
  d: path("M4 7h12v14H4Zm4-4h12v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uhve_kb3h {
  stroke-opacity: 0.4;
  d: path("m10 11l2 3l-2 3l-2-3Z");
}
</style><g class="nrj6p8qat"><path class="uhve_kb3h"/><path class="hzf9y-bdg"/></g>`,
		"fallback": "coolicons:playing-cards-duocolor-sharp",
	});
}

export default Component;
