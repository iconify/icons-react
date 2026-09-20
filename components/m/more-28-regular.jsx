import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":29,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ad4_ztbhi {
  d: path("M8.584 14a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.t-0q0qyfm {
  d: path("M16.584 14a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0z");
  fill: currentColor;
}

.ztzgdymrf {
  d: path("M22.334 16.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="ad4_ztbhi"/><path class="t-0q0qyfm"/><path class="ztzgdymrf"/></g>`,
		"fallback": "fluent:more-28-regular",
	});
}

export default Component;
