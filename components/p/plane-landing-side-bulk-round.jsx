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

.rd1da69_r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m7.447 5.106l1.106.552L9.882 3a1.794 1.794 0 0 1 2.586-.71c.289.188.514.458.648.776l2.659 6.203l4.567 2.284A3 3 0 0 1 22 14.236V15a2.235 2.235 0 0 1-3.236 2L4.843 10.04a3 3 0 0 1-.78-.562l-.98-.98a2.55 2.55 0 0 1-.477-2.945L2.882 5c.306-.613.933-1 1.618-1h.028c.466-.001.925.107 1.342.317Z");
}
</style><g class="cuyn6tgcc"><path class="rd1da69_r"/><path class="fjmgsib9m"/></g>`,
		"fallback": "coolicons:plane-landing-side-bulk-round",
	});
}

export default Component;
