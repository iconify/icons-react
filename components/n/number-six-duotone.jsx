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

.hidfxz0es {
  d: path("M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zii__vm0n {
  d: path("M128 104a56 56 0 0 0-15.62 2.23L143 51.93a8 8 0 1 0-14-7.85l-49.55 88A56 56 0 1 0 128 104m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><g class="cuyn6tgcc"><path class="hidfxz0es"/><path class="zii__vm0n"/></g>`,
		"fallback": "ph:number-six-duotone",
	});
}

export default Component;
