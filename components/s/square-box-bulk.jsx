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

.kc83mf6mj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17.5 9.533v4.934a1.5 1.5 0 0 1-.836 1.345l-4 1.975c-.418.207-.91.207-1.328 0l-4-1.975a1.5 1.5 0 0 1-.836-1.345V9.533a1.5 1.5 0 0 1 .836-1.345l4-1.975c.418-.207.91-.207 1.328 0l4 1.975a1.5 1.5 0 0 1 .836 1.345");
}

.s6wz3sbaw {
  d: path("M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3M4 19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a.997.997 0 0 0-1 1Zm8-8.671l3.977-1.964a1 1 0 1 1 .886 1.793L13 12.066v4.876a1 1 0 1 1-2 0v-4.876l-3.863-1.908a1 1 0 1 1 .886-1.793Z");
}
</style><g class="cuyn6tgcc"><path class="kc83mf6mj"/><path class="s6wz3sbaw"/></g>`,
		"fallback": "coolicons:square-box-bulk",
	});
}

export default Component;
