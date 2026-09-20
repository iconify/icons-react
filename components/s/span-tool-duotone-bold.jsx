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
		"content": `<style>.aiv48bw3s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 11h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gt3empbzf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 17h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pldoi_k0z {
  d: path("M7 11h11");
}

.s-mi-tbrv {
  d: path("M10 17h11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ucz-wqkxp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 5h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uzrr--bsw {
  d: path("M3 5h9");
}
</style><g class="s0phu2bbs"><path class="ucz-wqkxp"/><path class="aiv48bw3s"/><path class="gt3empbzf"/><path class="uzrr--bsw"/><path class="pldoi_k0z"/><path class="s-mi-tbrv"/></g>`,
		"fallback": "iconmind:span-tool-duotone-bold",
	});
}

export default Component;
