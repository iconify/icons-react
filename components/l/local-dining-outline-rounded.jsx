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
		"content": `<style>.t9dh643gy {
  fill: currentColor;
  d: path("m11.975 13.45l-6.9 6.85q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7l9.55-9.55q-.45-1.05-.125-2.375T14.525 4.6q1.325-1.325 2.95-1.55t2.65.8t.8 2.65t-1.55 2.95q-1.05 1.1-2.375 1.425t-2.375-.125L13.375 12l6.9 6.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm-4.65-1l-3-3Q3.275 8.4 3 6.8t.625-2.85q.275-.375.738-.425t.787.3l5.375 5.425z");
}
</style><path class="t9dh643gy"/>`,
		"fallback": "material-symbols:local-dining-outline-rounded",
	});
}

export default Component;
