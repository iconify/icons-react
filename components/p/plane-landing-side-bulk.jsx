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

.fjmgsib9m {
  d: path("M3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}

.vqu_ykkvj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m7.447 5.106l1.106.552L9.882 3a1.794 1.794 0 0 1 2.586-.71c.289.188.514.458.648.776l2.659 6.203l5.119 2.56A2 2 0 0 1 22 13.618v1.764a2 2 0 0 1-2.894 1.789L4.698 9.967a2 2 0 0 1-.52-.375L2.803 8.217a2 2 0 0 1-.375-2.309L2.882 5c.306-.613.933-1 1.618-1h.264c.311-.001.617.071.894.211Z");
}
</style><g class="cuyn6tgcc"><path class="vqu_ykkvj"/><path class="fjmgsib9m"/></g>`,
		"fallback": "coolicons:plane-landing-side-bulk",
	});
}

export default Component;
