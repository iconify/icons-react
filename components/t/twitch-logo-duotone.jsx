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

.gxbyhdsvq {
  d: path("M216 48v108.25a8 8 0 0 1-2.88 6.15l-42.89 35.75a8.05 8.05 0 0 1-5.13 1.85H120l-48 40v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.irv_04o5g {
  d: path("M208 32H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v32a8 8 0 0 0 13.12 6.15L122.9 208h42.2a16 16 0 0 0 10.25-3.71l42.89-35.75a15.93 15.93 0 0 0 5.76-12.29V48a16 16 0 0 0-16-16m0 124.25L165.1 192H120a8 8 0 0 0-5.12 1.85L80 222.92V200a8 8 0 0 0-8-8H48V48h160ZM160 136V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m-48 0V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0");
}
</style><g class="cuyn6tgcc"><path class="gxbyhdsvq"/><path class="irv_04o5g"/></g>`,
		"fallback": "ph:twitch-logo-duotone",
	});
}

export default Component;
