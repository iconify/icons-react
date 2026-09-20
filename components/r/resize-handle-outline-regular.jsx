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
		"content": `<style>.dq5olwsrs {
  d: path("m21.5 18.5 -3 3");
}

.htx64eiti {
  d: path("m21.5 5.5 -16 16");
}

.j0xsopbwy {
  d: path("m21.5 12.5 -9 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="htx64eiti"/><path class="j0xsopbwy"/><path class="dq5olwsrs"/></g>`,
		"fallback": "iconmind:resize-handle-outline-regular",
	});
}

export default Component;
