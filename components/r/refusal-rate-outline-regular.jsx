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
		"content": `<style>.m-y6zjb5q {
  d: path("M16 15v3");
}

.mq159kbup {
  d: path("M12 15v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.u8oheccad {
  d: path("M8 15v3");
}
</style><g class="nrj6p8qat"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="u8oheccad"/><path class="mq159kbup"/><path class="m-y6zjb5q"/></g>`,
		"fallback": "iconmind:refusal-rate-outline-regular",
	});
}

export default Component;
