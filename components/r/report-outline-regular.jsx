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
		"content": `<style>.a5uqb5btg {
  d: path("M9 14v4");
}

.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.i4l6z3b8k {
  d: path("M15 13v5");
}

.l1jjkky7x {
  d: path("M8 18h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r-3ib9fxz {
  d: path("M12 11v7");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="a5uqb5btg"/><path class="r-3ib9fxz"/><path class="i4l6z3b8k"/><path class="l1jjkky7x"/></g>`,
		"fallback": "iconmind:report-outline-regular",
	});
}

export default Component;
