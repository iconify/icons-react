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
		"content": `<style>.ee0-i8bqo {
  d: path("M22 15L22 6");
}

.eqlh5gr9l {
  stroke-opacity: 0.4;
  d: path("M2 6L16 6M2 12L10 12M2 18L10 18");
}

.mfg4gqx2s {
  fill: currentColor;
  d: path("M23 15C23 17.2091 21.2091 19 19 19C16.7909 19 15 17.2091 15 15C15 12.7909 16.7909 11 19 11C21.2091 11 23 12.7909 23 15Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="eqlh5gr9l"/><path class="mfg4gqx2s"/><path class="ee0-i8bqo"/></g>`,
		"fallback": "keyline-icons:list-music-duotone",
	});
}

export default Component;
