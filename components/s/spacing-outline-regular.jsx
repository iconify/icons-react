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
		"content": `<style>.ajea6vpsn {
  d: path("m9 10 -2 2 2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r3faxubne {
  d: path("M4 4v16");
}

.tuynf1bdi {
  d: path("m15 10 2 2 -2 2");
}

.uxyzhxvwz {
  d: path("M7 12h10");
}

.ws1d0fbts {
  d: path("M20 4v16");
}
</style><g class="nrj6p8qat"><path class="r3faxubne"/><path class="ws1d0fbts"/><path class="uxyzhxvwz"/><path class="ajea6vpsn"/><path class="tuynf1bdi"/></g>`,
		"fallback": "iconmind:spacing-outline-regular",
	});
}

export default Component;
