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
		"content": `<style>.zeoq_k1zh {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5V12h-1V5.5a1.5 1.5 0 0 0-1.355-1.493L14.5 4h-9a1.5 1.5 0 0 0-1.493 1.356L4 5.5V12H3V5.5A2.5 2.5 0 0 1 5.5 3zM17 14.5a2.496 2.496 0 0 1-2.5 2.5H13v-4h4zm-13 2c.418.314.937.5 1.5.5H7v-4H3v1.5c0 .818.393 1.544 1 2M8 13h4v4H8z");
}
</style><path class="zeoq_k1zh"/>`,
		"fallback": "fluent:table-bottom-row-20-filled",
	});
}

export default Component;
