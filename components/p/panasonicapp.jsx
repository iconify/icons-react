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
		"content": `<style>.pcb913v2p {
  cx: 24px;
  cy: 28.404px;
  r: 2.887px;
}

.tby8fyb3q {
  d: path("M8.643 24.171h4.65v9.767h7.798a6.325 6.325 0 0 1-2.958-7.115c.74-2.768 3.246-4.693 5.867-4.693s5.128 1.925 5.867 4.693a6.325 6.325 0 0 1-2.957 7.115h7.797v-9.767h4.65L24 14.061z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zgjvwu5ho {
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}
</style><g class="y9tr6bcfx"><path class="zgjvwu5ho"/><path class="tby8fyb3q"/><circle class="pcb913v2p"/></g>`,
		"fallback": "arcticons:panasonicapp",
	});
}

export default Component;
