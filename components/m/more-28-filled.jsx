import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

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

.gem-7_hbl {
  d: path("M8.751 14a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0z");
  fill: currentColor;
}

.hsu5-f7ew {
  d: path("M16.751 14a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0z");
  fill: currentColor;
}

.l6adibbeh {
  d: path("M22.001 16.75a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="gem-7_hbl"/><path class="hsu5-f7ew"/><path class="l6adibbeh"/></g>`,
		"fallback": "fluent:more-28-filled",
	});
}

export default Component;
