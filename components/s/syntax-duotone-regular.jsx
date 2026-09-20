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
		"content": `<style>.dhme87bwo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 17h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fa2e7y2tg {
  d: path("M4 17h8");
}

.kw2csablp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 4 4 8l4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ukhmdccjx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 4 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vj8si9dha {
  d: path("m16 4 4 4 -4 4");
}

.wfg0vmbgy {
  d: path("M15 17h5");
}

.z_2cvsa8b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 17h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zaau21ski {
  d: path("M8 4 4 8l4 4");
}
</style><g class="nrj6p8qat"><path class="kw2csablp"/><path class="ukhmdccjx"/><path class="dhme87bwo"/><path class="z_2cvsa8b"/><path class="zaau21ski"/><path class="vj8si9dha"/><path class="fa2e7y2tg"/><path class="wfg0vmbgy"/></g>`,
		"fallback": "iconmind:syntax-duotone-regular",
	});
}

export default Component;
