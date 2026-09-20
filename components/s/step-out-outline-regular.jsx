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
		"content": `<style>.ilxguy6uu {
  d: path("M12 4v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t407nkbfi {
  d: path("m9 7 3 -3 3 3");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="nrj6p8qat"><path class="xyj-l9cjp"/><path class="ilxguy6uu"/><path class="t407nkbfi"/></g>`,
		"fallback": "iconmind:step-out-outline-regular",
	});
}

export default Component;
