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
		"content": `<style>.tbg-c6bmf {
  fill: currentColor;
  d: path("m6.35 14.725l1.95-7q.1-.325.35-.525t.6-.2H10V5.9q0-.2.038-.387t.112-.388l1.225-2.85q.05-.125.175-.2T11.8 2h.4q.125 0 .25.075t.175.2l1.225 2.85q.075.2.113.388T14 5.9V7h.75q.35 0 .6.2t.35.525l1.95 7q.125.475-.175.875t-.8.4h-9.35q-.5 0-.8-.4t-.175-.875M5.375 21q-.5 0-.812-.413t-.138-.912l.125-.3q.2-.625.725-1T6.45 18h11.1q.65 0 1.175.375t.725 1l.125.3q.175.5-.137.913t-.813.412z");
}
</style><path class="tbg-c6bmf"/>`,
		"fallback": "material-symbols:stylus-pen-rounded",
	});
}

export default Component;
