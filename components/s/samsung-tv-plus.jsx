import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p67_57bnj {
  d: path("M18.09 33.16c0 1.18.594 1.772 1.774 1.772h8.863c1.177 0 1.773-.59 1.773-1.773m-12.41.001v-1.183M30.5 33.16v-1.183");
}

.xl48v3cjl {
  d: path("M37.59 16.023v-3.546c0-1.185-1.182-2.363-2.363-2.363H6.864c-1.185 0-2.364 1.177-2.364 2.363v17.137c0 1.184 1.071 2.363 2.364 2.363h3.545m.001 0v3.546c0 1.185 1.182 2.363 2.363 2.363h28.363c1.185 0 2.364-1.177 2.364-2.363V18.386c0-1.185-1.071-2.363-2.364-2.363h-3.545");
}

.xtxrmkbec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 31.977h4.727c1.18 0 2.364-1.178 2.364-2.363c0 0-.003-2.167 0-13.591H12.773a2.364 2.364 0 0 0-2.364 2.363v13.591h7.682");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="xtxrmkbec"/><g class="y9tr6bcfx"><path class="xl48v3cjl"/><path class="p67_57bnj"/></g>`,
		"fallback": "arcticons:samsung-tv-plus",
	});
}

export default Component;
