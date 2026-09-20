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
		"content": `<style>.bj2hlhbfp {
  d: path("M3 12h12");
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xrnoeq00r {
  d: path("M3 7h6");
}
</style><g class="nrj6p8qat"><path class="xrnoeq00r"/><path class="bj2hlhbfp"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:rollout-outline-regular",
	});
}

export default Component;
