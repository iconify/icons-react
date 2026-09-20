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

.emm04ib2w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 10v6h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.noimmwhne {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 16h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nu1_4q-9l {
  d: path("M14 16h7");
}

.wwnbqi33p {
  d: path("M6 10v6h5");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="emm04ib2w"/><path class="noimmwhne"/><path class="xgrfb-bqu"/><path class="wwnbqi33p"/><path class="nu1_4q-9l"/></g>`,
		"fallback": "iconmind:subtask-duotone-regular",
	});
}

export default Component;
