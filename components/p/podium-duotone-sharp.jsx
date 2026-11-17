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
		"content": `<style>.c0ttv24bs {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 5h8v16H8Z");
}

.ft5dv1b6b {
  fill: none;
}

.xztu3-i7z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12H3v9h5m8-6h5v6h-5m-8 0V5h8v16zm3-10l2-2v6");
}
</style><g class="ft5dv1b6b"><path class="c0ttv24bs"/><path class="xztu3-i7z"/></g>`,
		"fallback": "coolicons:podium-duotone-sharp",
	});
}

export default Component;
