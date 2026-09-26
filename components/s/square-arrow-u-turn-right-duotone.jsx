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
		"content": `<style>.bk0wc9bwk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vo64d318x {
  d: path("M15.6993 10.5H11.0797C9.37884 10.5 8 11.8431 8 13.5C8 15.1569 9.37884 16.5 11.0797 16.5H12.1063M13.1329 7.5L15.8497 10.1464C16.0501 10.3417 16.0501 10.6583 15.8497 10.8536L13.1329 13.5");
}
</style><g class="nrj6p8qat"><path class="bk0wc9bwk"/><path class="vo64d318x"/></g>`,
		"fallback": "keyline-icons:square-arrow-u-turn-right-duotone",
	});
}

export default Component;
