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
		"content": `<style>.fv1wuac9w {
  d: path("M7.5 21.25c0-1.5 2-2.5 4.5-2.5s4.5 1 4.5 2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xej0afb8f {
  cx: 12px;
  cy: 15.5px;
  r: 1.5px;
}

.ykp-mro1c {
  d: path("M7.5 3.25L9 5.083V6a1.5 1.5 0 0 1-3 0v-.917zm4.5 0l1.5 1.833V6a1.5 1.5 0 0 1-3 0v-.917zm4.5 0L18 5.083V6a1.5 1.5 0 0 1-3 0v-.917zm-12 6h15a7.5 3 0 0 1-15 0Zm7.5 3V14m0 3v1.75");
}
</style><g class="x2cwu0gfd"><path class="ykp-mro1c"/><circle class="xej0afb8f"/><path class="fv1wuac9w"/></g>`,
		"fallback": "iconoven:oil-lamp-sharp",
	});
}

export default Component;
