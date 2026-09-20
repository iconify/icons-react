import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h3o1nlbko {
  fill: currentColor;
  d: path("M17.507 4.034a1.5 1.5 0 0 0-1.49-1.498l-4.891-.032a1.5 1.5 0 0 0-1.07.438l-6.68 6.664a1.5 1.5 0 0 0-.002 2.123l4.948 4.948a1.5 1.5 0 0 0 1.678.308V14a2 2 0 0 1 1.5-1.937V12a3 3 0 0 1 5.41-1.788l.164-.165a1.5 1.5 0 0 0 .44-1.063z");
}
</style><path class="h3o1nlbko"/>`,
		"fallback": "fluent:tag-lock-accent-20-filled",
	});
}

export default Component;
