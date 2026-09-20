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
		"content": `<style>.lxtc-wp5b {
  d: path("m10 10 4 4");
}

.moha5wbmp {
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s-cqkabbd {
  d: path("m14 10 -4 4");
}

.yix-58bnj {
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
}
</style><g class="nrj6p8qat"><path class="yix-58bnj"/><path class="moha5wbmp"/><path class="lxtc-wp5b"/><path class="s-cqkabbd"/></g>`,
		"fallback": "iconmind:tracking-opt-out-outline-regular",
	});
}

export default Component;
