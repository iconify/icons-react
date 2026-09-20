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
		"content": `<style>.ga9xkbieh {
  d: path("m8.5 8.5 7 7");
}

.jgxljgb7e {
  d: path("m3.5 13.5 10 -10a5 5 0 0 1 7 7l-10 10a5 5 0 0 1 -7 -7");
}

.l2envlbrx {
  fill: currentColor;
  d: path("m3.5 13.5 10 -10a5 5 0 0 1 7 7l-10 10a5 5 0 0 1 -7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="l2envlbrx"/><path class="jgxljgb7e"/><path class="ga9xkbieh"/></g>`,
		"fallback": "iconmind:pill-duotone-regular",
	});
}

export default Component;
