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
		"content": `<style>.gtdr2w9su {
  d: path("M21 4.503L21 18C21 19.6569 19.6569 21 18 21L4.503 21C3.1667 21 2.4974 19.3843 3.4423 18.4393L18.4393 3.4423C19.3843 2.4974 21 3.1667 21 4.503Z");
}

.i0sj_ibxw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 4.503L22 18C22 20.2092 20.2092 22 18 22L4.503 22C4.4983 22 4.4935 22 4.4888 22C3.9791 22 3.4818 21.843 3.0646 21.5502C2.3972 21.0758 2.0008 20.3077 2.0008 19.4889C2.0008 19.3476 2.0126 19.2067 2.0362 19.0674C2.125 18.5606 2.3693 18.094 2.7352 17.7322L17.7322 2.7352C18.094 2.3693 18.5606 2.125 19.0674 2.0362C19.2067 2.0126 19.3476 2.0008 19.4889 2.0008C20.3077 2.0008 21.0758 2.3972 21.5502 3.0646C21.843 3.4818 22 3.9791 22 4.4888C22 4.4935 22 4.4983 22 4.503Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i0sj_ibxw"/><path class="gtdr2w9su"/></g>`,
		"fallback": "keyline-icons:triangle-right-two-tone",
	});
}

export default Component;
