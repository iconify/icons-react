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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.sb0gfg80o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 6l6 2c1.107.369 1.738 1.631 1 2l-6 3l-3 6c-.369.738-1.631.107-2-1L4 6c-.412-1.236.764-2.412 2-2z");
}

.uf26-e71k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 8c1.107.369 1.738 1.631 1 2l-6 3l-3 6c-.369.738-1.631.107-2-1L4 6a1.58 1.58 0 0 1 2-2Z");
}
</style><g class="ft5dv1b6b"><path class="uf26-e71k"/><path class="sb0gfg80o"/></g>`,
		"fallback": "coolicons:navigation-duotone",
	});
}

export default Component;
