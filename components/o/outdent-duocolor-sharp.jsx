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
		"content": `<style>.f4vji8emu {
  stroke-opacity: 0.4;
  d: path("m8 8l-4 4l4 4");
}

.i3xzrim4g {
  d: path("M12 6h8m-8 4h8m-8 4h8m-8 4h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="f4vji8emu"/><path class="i3xzrim4g"/></g>`,
		"fallback": "coolicons:outdent-duocolor-sharp",
	});
}

export default Component;
