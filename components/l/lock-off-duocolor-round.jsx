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
		"content": `<style>.fh621fbny {
  d: path("M18.828 19.828A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4m6 0h2a4 4 0 0 1 4 4v2");
}

.nfnuaabzh {
  stroke-opacity: 0.4;
  d: path("M9.172 4.172A4 4 0 0 1 16 7v2M2 3l19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nfnuaabzh"/><path class="fh621fbny"/></g>`,
		"fallback": "coolicons:lock-off-duocolor-round",
	});
}

export default Component;
