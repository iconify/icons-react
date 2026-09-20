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
		"content": `<style>.be306ynmy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eyz0ade9p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 9 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fu2iodbya {
  d: path("M3 16h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r3-lax2ik {
  d: path("m8 9 4 4");
}

.rbrtppjye {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 11h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tvol5dbhf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w8fmvxwit {
  d: path("M3 11h14");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="rbrtppjye"/><path class="eyz0ade9p"/><path class="tvol5dbhf"/><path class="xgrfb-bqu"/><path class="w8fmvxwit"/><path class="r3-lax2ik"/><path class="fu2iodbya"/></g>`,
		"fallback": "iconmind:mmr-duotone-regular",
	});
}

export default Component;
