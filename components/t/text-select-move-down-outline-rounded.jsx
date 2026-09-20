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
		"content": `<style>.ob85a3y9n {
  fill: currentColor;
  d: path("M4 5q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5zm7.3 11.3l-2.6-2.6q-.275-.275-.287-.687T8.7 12.3q.275-.275.7-.275t.7.275l.9.875V8q0-.425.288-.712T12 7t.713.288T13 8v5.175l.9-.9q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7l-2.6 2.6q-.3.3-.7.3t-.7-.3M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21z");
}
</style><path class="ob85a3y9n"/>`,
		"fallback": "material-symbols:text-select-move-down-outline-rounded",
	});
}

export default Component;
