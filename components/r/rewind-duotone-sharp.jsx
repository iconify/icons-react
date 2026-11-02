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
		"content": `<style>.a6mxqbbot {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m3 12l9-5v10Zm9 0l9-5v10Z");
}

.ft5dv1b6b {
  fill: none;
}

.kzb8stbhk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m21 7l-9 5l9 5Zm-9 0l-9 5l9 5Z");
}
</style><g class="ft5dv1b6b"><path class="a6mxqbbot"/><path class="kzb8stbhk"/></g>`,
		"fallback": "coolicons:rewind-duotone-sharp",
	});
}

export default Component;
