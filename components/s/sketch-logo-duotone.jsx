import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jligoeacw {
  d: path("m246 98.73l-56-64a8 8 0 0 0-6-2.73H72a8 8 0 0 0-6 2.73l-56 64a8 8 0 0 0 .17 10.73l112 120a8 8 0 0 0 11.7 0l112-120a8 8 0 0 0 .13-10.73M222.37 96H180l-36-48h36.37ZM74.58 112l30.13 75.33L34.41 112Zm89.6 0L128 202.46L91.82 112ZM96 96l32-42.67L160 96Zm85.42 16h40.17l-70.3 75.33ZM75.63 48H112L76 96H33.63Z");
}

.uh0s7ob8j {
  d: path("M240 104L128 224L80 104l48-64h56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="uh0s7ob8j"/><path class="jligoeacw"/></g>`,
		"fallback": "ph:sketch-logo-duotone",
	});
}

export default Component;
