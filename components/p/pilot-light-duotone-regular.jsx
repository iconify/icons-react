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
		"content": `<style>.cma40lsnw {
  d: path("M5.5 16.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.jqnlgvbzg {
  fill: currentColor;
  d: path("M5.5 16.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mzsthfbrb {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.rrv-npbwa {
  d: path("M7.5 10.5V13");
}

.ruqrtab9h {
  d: path("m10 14 2 -2");
}
</style><g class="nrj6p8qat"><path class="mzsthfbrb"/><path class="jqnlgvbzg"/><path class="nzpsuduik"/><path class="cma40lsnw"/><path class="rrv-npbwa"/><path class="ruqrtab9h"/></g>`,
		"fallback": "iconmind:pilot-light-duotone-regular",
	});
}

export default Component;
