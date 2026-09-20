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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pfpu_3ppl {
  d: path("M12 8v4");
}

.qiz42bc0y {
  d: path("M8.5 15.5 12 12l3.5 3.5");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="pfpu_3ppl"/><path class="qiz42bc0y"/></g>`,
		"fallback": "iconmind:root-cause-outline-regular",
	});
}

export default Component;
