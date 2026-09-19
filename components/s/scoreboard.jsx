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
		"content": `<style>.sw6-f8blx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.072 17.405l7.05-10.424c.584-.864-.168-2.002-1.192-1.805L15.308 8.773L7.993 19.589a2.35 2.35 0 0 0 .63 3.266l10.817 7.314l21.397-4.132l-8.633 12.765l-18.622 3.596c-1.024.198-1.776-.941-1.192-1.805l7.05-10.424zl12.765 8.632");
}
</style><path class="sw6-f8blx"/>`,
		"fallback": "arcticons:scoreboard",
	});
}

export default Component;
