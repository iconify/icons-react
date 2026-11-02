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
		"content": `<style>.n3ijmobdd {
  stroke-opacity: 0.4;
  d: path("M12 4v5m0 6v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zgxuderfk {
  d: path("M4 4h16v16H4Zm0 5h16M4 15h16");
}
</style><g class="nrj6p8qat"><path class="n3ijmobdd"/><path class="zgxuderfk"/></g>`,
		"fallback": "coolicons:table-cells-merge-duocolor-sharp",
	});
}

export default Component;
