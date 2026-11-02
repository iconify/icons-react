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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.sy9auzjda {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 7v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3");
}

.xf7-j2bfy {
  d: path("M10 2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m3 10v3.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L11 15.586V12a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="sy9auzjda"/><path class="xf7-j2bfy"/></g>`,
		"fallback": "coolicons:paste-bulk",
	});
}

export default Component;
