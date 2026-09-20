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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q71ix4yfi {
  d: path("m4 5 7 7 -7 7Z");
}

.um-4xc65y {
  d: path("m12 5 7 7 -7 7");
}

.zxu5b42ht {
  fill: currentColor;
  d: path("m4 5 7 7 -7 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zxu5b42ht"/><path class="q71ix4yfi"/><path class="um-4xc65y"/></g>`,
		"fallback": "iconmind:test-double-duotone-regular",
	});
}

export default Component;
