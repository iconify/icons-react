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
		"content": `<style>.j4nr7eb0n {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 15.75h.01m7.99 0h.01");
}

.umqstjbzw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 12.5c0-2.5 2.5-3.5 3.75-6c1.25 2.5 3.75 3.5 3.75 6Zm3.75-6V3m-1.5 18.25v-3a1.5 1.5 0 0 1 3 0v3");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zxd65nibz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.75V8.5q0-.5.22-.95l1.06-2.1q.22-.45.44 0l1.06 2.1q.22.45.22.95V12q0 .5.5.5h11.5q.5 0 .5-.5V8.5q0-.5.22-.95l1.06-2.1q.22-.45.44 0l1.06 2.1q.22.45.22.95v12.25q0 .5-.5.5H3.25q-.5 0-.5-.5");
}
</style><g class="y9tr6bcfx"><path class="zxd65nibz"/><path class="umqstjbzw"/><path class="j4nr7eb0n"/></g>`,
		"fallback": "iconoven:palace",
	});
}

export default Component;
