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
		"content": `<style>.cflyrvc9a {
  fill: currentColor;
  d: path("M3.5 13q-.625 0-1.062-.437T2 11.5t.438-1.062T3.5 10h6q.625 0 1.063.438T11 11.5t-.437 1.063T9.5 13zm11 0q-.625 0-1.062-.437T13 11.5t.438-1.062T14.5 10h6q.625 0 1.063.438T22 11.5t-.437 1.063T20.5 13z");
}
</style><path class="cflyrvc9a"/>`,
		"fallback": "material-symbols:unknown-med",
	});
}

export default Component;
