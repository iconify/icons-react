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
		"content": `<style>.rmcjynfuc {
  d: path("M10 2.5h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm-2 4h2M8 10h2m4-3.5h2M14 10h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvz_7pbbi {
  d: path("M4.5 11.5a7.5 7.5 0 0 0 15 0M12 19v2.5");
}
</style><g class="ulnmmdpxh"><path class="rmcjynfuc"/><path class="uvz_7pbbi"/></g>`,
		"fallback": "uix-sharp:microphone-lines",
	});
}

export default Component;
