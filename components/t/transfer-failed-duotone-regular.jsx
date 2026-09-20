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
		"content": `<style>.a5c-jhmhz {
  d: path("m14 13 -4 4");
}

.gjjx1zbjy {
  d: path("m10 13 4 4");
}

.jhpa89did {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 13 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k5ecbgu2w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.te86mq-dq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 13 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="k5ecbgu2w"/><path class="te86mq-dq"/><path class="jhpa89did"/><path class="mcubrkb2y"/><path class="gjjx1zbjy"/><path class="a5c-jhmhz"/></g>`,
		"fallback": "iconmind:transfer-failed-duotone-regular",
	});
}

export default Component;
