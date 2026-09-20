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
		"content": `<style>.kzvnhdb6o {
  fill: currentColor;
  d: path("M14 19H9.5q-.625 0-1.062-.437T8 17.5t.438-1.062T9.5 16H14v-2.5h-3.5q-.625 0-1.062-.437T9 12t.438-1.062T10.5 10.5H14V8H9.5q-.625 0-1.062-.437T8 6.5t.438-1.062T9.5 5H14q1.25 0 2.125.875T17 8v1.9q0 .875-.612 1.488T14.9 12q.875 0 1.488.613T17 14.1V16q0 1.25-.875 2.125T14 19");
}
</style><path class="kzvnhdb6o"/>`,
		"fallback": "material-symbols:timer-3-outline-rounded",
	});
}

export default Component;
