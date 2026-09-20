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
		"content": `<style>.c-y40940q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 4v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cgg0z9bcn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15.5 5.94a7 7 0 0 1 0 12.12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k2anuobao {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 15v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k3x4ygb5y {
  d: path("M15.5 5.94a7 7 0 0 1 0 12.12");
}

.kxd265bns {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.5 18.06a7 7 0 0 1 0 -12.12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r_je2bdjk {
  d: path("M12 4v5");
}

.uverd3z0e {
  d: path("M8.5 18.06a7 7 0 0 1 0 -12.12");
}

.xyf3o9drf {
  d: path("M12 15v5");
}
</style><g class="nrj6p8qat"><path class="kxd265bns"/><path class="cgg0z9bcn"/><path class="c-y40940q"/><path class="k2anuobao"/><path class="uverd3z0e"/><path class="k3x4ygb5y"/><path class="r_je2bdjk"/><path class="xyf3o9drf"/></g>`,
		"fallback": "iconmind:reflection-duotone-regular",
	});
}

export default Component;
