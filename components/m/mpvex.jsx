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
		"content": `<style>.zbqznkb8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.624 7.98l.082 32.043c0 .264.2.477.445.477a.4.4 0 0 0 .223-.065l25.781-16.097a.498.498 0 0 0-.002-.829L11.289 7.564a.43.43 0 0 0-.607.176a.5.5 0 0 0-.06.24z");
}
</style><path class="zbqznkb8v"/>`,
		"fallback": "arcticons:mpvex",
	});
}

export default Component;
