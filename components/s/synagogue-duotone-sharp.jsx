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
		"content": `<style>.bso8habpx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 8c0-.379.214-.725.553-.894l8-4a1 1 0 0 1 .894 0l8 4A1 1 0 0 1 21 8v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}

.ft5dv1b6b {
  fill: none;
}

.he7um4bhs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 21V8l8-4l8 4v13zm8-12l3.464 6H8.536Zm0 8l3.464-6H8.536Z");
}
</style><g class="ft5dv1b6b"><path class="bso8habpx"/><path class="he7um4bhs"/></g>`,
		"fallback": "coolicons:synagogue-duotone-sharp",
	});
}

export default Component;
