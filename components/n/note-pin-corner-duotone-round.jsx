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
		"content": `<style>.absq24bnf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 12v8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4h-8a4 4 0 0 0-4 4m7 1h4v3l1 1c.369.369-.262 1-1 1h-4c-.738 0-1.369-.631-1-1l1-1Z");
}

.ewn33rbbj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4m-5 5h4v3l1 1c.369.369-.262 1-1 1h-4c-.738 0-1.369-.631-1-1l1-1zm-1 0h6m-3 5v3");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="absq24bnf"/><path class="ewn33rbbj"/></g>`,
		"fallback": "coolicons:note-pin-corner-duotone-round",
	});
}

export default Component;
