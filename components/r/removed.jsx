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
		"content": `<style>.xp6ptjbsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.497 22.916a3.335 3.335 0 0 1 3.335-3.335h0m-3.335 0v8.838m-7.329-12.424H12.5v16.01h2.668m17.664-16.01H35.5v16.01h-2.668");
}

.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}
</style><path class="xp6ptjbsx"/><path class="ydqthzbbt"/>`,
		"fallback": "arcticons:removed",
	});
}

export default Component;
