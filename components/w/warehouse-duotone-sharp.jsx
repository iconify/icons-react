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
		"content": `<style>.ffjtdp_lx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 21V8l6-3h4l6 3v13zm4 0v-9h8v9m-8-5h8");
}

.ft5dv1b6b {
  fill: none;
}

.ymk-1sygl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m4 8l6-3h4l6 3v13H4Z");
}
</style><g class="ft5dv1b6b"><path class="ymk-1sygl"/><path class="ffjtdp_lx"/></g>`,
		"fallback": "coolicons:warehouse-duotone-sharp",
	});
}

export default Component;
