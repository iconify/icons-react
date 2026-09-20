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
		"content": `<style>.ktnvtkb4c {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M7 12.023l-1.171-.418A1.25 1.25 0 0 1 5 10.427v-.85c0-.529.332-1 .829-1.178l6.501-2.325a1.25 1.25 0 0 1 1.671 1.177v5.502a1.25 1.25 0 0 1-1.67 1.177l-1.379-.493A2 2 0 0 1 7 13zm2.996 1.072A1 1 0 0 1 8 13v-.619z");
}
</style><path class="ktnvtkb4c"/>`,
		"fallback": "fluent:megaphone-circle-20-filled",
	});
}

export default Component;
