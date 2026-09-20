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
		"content": `<style>.mho7bk0jd {
  d: path("M12 13c0 -5 4 -8 9 -8 0 5 -4 8 -9 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p-4c_po-t {
  d: path("M12 21v-8");
}

.w89kumbyo {
  d: path("M12 13c0 -5 -4 -8 -9 -8 0 5 4 8 9 8");
}
</style><g class="nrj6p8qat"><path class="p-4c_po-t"/><path class="w89kumbyo"/><path class="mho7bk0jd"/></g>`,
		"fallback": "iconmind:vegan-outline-regular",
	});
}

export default Component;
