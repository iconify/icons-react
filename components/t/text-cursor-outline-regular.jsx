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
		"content": `<style>.gop02zbrx {
  d: path("M8 4h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.r7xk8o29f {
  d: path("M12 4v16");
}
</style><g class="nrj6p8qat"><path class="gop02zbrx"/><path class="r7xk8o29f"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:text-cursor-outline-regular",
	});
}

export default Component;
