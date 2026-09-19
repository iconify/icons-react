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
		"content": `<style>.cyz24ccds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.316 28c-1.464 0-2.441-1.186-2.183-2.65l.476-2.7c.258-1.464 1.654-2.65 3.117-2.65h0c1.464 0 2.441 1.186 2.183 2.65l-.476 2.7c-.258 1.464-1.654 2.65-3.117 2.65m19.958 0c-1.464 0-2.441-1.186-2.183-2.65l.476-2.7c.258-1.464 1.654-2.65 3.117-2.65h0c1.464 0 2.441 1.186 2.183 2.65l-.476 2.7c-.258 1.464-1.654 2.65-3.117 2.65");
}

.s53wggb1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M18.651 20h5.3m-4.061 8l1.411-8m4.331 0h5.3m-4.06 8l1.41-8");
}
</style><path class="s53wggb1x"/><path class="cyz24ccds"/>`,
		"fallback": "arcticons:otto",
	});
}

export default Component;
