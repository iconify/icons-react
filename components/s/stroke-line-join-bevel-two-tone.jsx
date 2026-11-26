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

.pt2e2p5li {
  stroke-opacity: 0.4;
  d: path("M11 21V12C11 11.4477 11.4477 11 12 11H21");
}

.qi4o1hcro {
  d: path("M3 21V11.4142C3 11.149 3.1054 10.8946 3.2929 10.7071L10.7071 3.2929C10.8946 3.1054 11.149 3 11.4142 3H21");
}
</style><g class="nrj6p8qat"><path class="pt2e2p5li"/><path class="qi4o1hcro"/></g>`,
		"fallback": "keyline-icons:stroke-line-join-bevel-two-tone",
	});
}

export default Component;
