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

.f-52c6b3g {
  d: path("M4 10v10h16V10");
}

.kqavb5qkt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 10v10h16V10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pp54i94hx {
  d: path("M9.5 5.5 12 3l2.5 2.5");
}

.r_je2bdjk {
  d: path("M12 4v5");
}

.y20ytabfw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 5.5 12 3l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="kqavb5qkt"/><path class="c-y40940q"/><path class="y20ytabfw"/><path class="f-52c6b3g"/><path class="r_je2bdjk"/><path class="pp54i94hx"/></g>`,
		"fallback": "iconmind:outbox-duotone-regular",
	});
}

export default Component;
