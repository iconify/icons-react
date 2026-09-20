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
		"content": `<style>.buk14h7lm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M20 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ewwqbpb8g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 12 2 2 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ws1d0fbts {
  d: path("M20 4v16");
}

.ylnxs8amf {
  d: path("m8 12 2 2 6 -6");
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="buk14h7lm"/><path class="ewwqbpb8g"/><path class="r3faxubne"/><path class="ws1d0fbts"/><path class="ylnxs8amf"/></g>`,
		"fallback": "iconmind:safety-check-duotone-bold",
	});
}

export default Component;
