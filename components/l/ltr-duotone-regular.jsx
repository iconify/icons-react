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

.d8abqfbpc {
  d: path("M3 11h18");
}

.digwvcbca {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ehxfnqbrv {
  d: path("M3 17h15");
}

.mgqc4ccku {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15.5 14.5 18 17l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3efntf1a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 17h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rx4ch-ouz {
  d: path("M15.5 14.5 18 17l-2.5 2.5");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="digwvcbca"/><path class="o3efntf1a"/><path class="mgqc4ccku"/><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="ehxfnqbrv"/><path class="rx4ch-ouz"/></g>`,
		"fallback": "iconmind:ltr-duotone-regular",
	});
}

export default Component;
