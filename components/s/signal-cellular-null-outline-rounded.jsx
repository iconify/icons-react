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
		"content": `<style>.zw3e4gbql {
  fill: currentColor;
  d: path("M4.425 22q-.675 0-.937-.612T3.7 20.3L20.3 3.7q.475-.475 1.088-.213t.612.938V20.5q0 .625-.437 1.063T20.5 22zm2.4-2H20V6.85z");
}
</style><path class="zw3e4gbql"/>`,
		"fallback": "material-symbols:signal-cellular-null-outline-rounded",
	});
}

export default Component;
