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
		"content": `<style>.ck8gx6k5q {
  fill: currentColor;
  d: path("M14.825 22q-.6 0-1.15-.225t-.975-.65L7.6 16l.825-.85q.35-.35.85-.475t1 0l1.725.5V8q0-.425.288-.712T13 7t.713.288T14 8v6h1V7q0-.425.288-.712T16 6t.713.288T17 7v7h1V9q0-.425.288-.712T19 8t.713.288T20 9v5h1q0-.425.288-.712T22 13t.713.288T23 14v4q0 1.65-1.175 2.825T19 22zM4 19q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h15q.825 0 1.413.588T21 5H4v12h1.8l1.975 2z");
}
</style><path class="ck8gx6k5q"/>`,
		"fallback": "material-symbols:trackpad-input-3",
	});
}

export default Component;
