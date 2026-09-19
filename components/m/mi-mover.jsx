import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rh3tup__h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.546 18.653L11.373 29.392M36.29 18.638L23.154 29.355M27.36 40.94a2.67 2.67 0 0 0 2.758 2.055a2.7 2.7 0 0 0 1.86-.88l7.645-8.51c.99-1.102.9-2.797-.202-3.787l-.008-.007c-.589-.53-1.355-.538-4.11-.456H11.92a4.176 4.176 0 1 0 0 8.34h15.44zM20.68 7.06a2.67 2.67 0 0 0-2.762-2.055a2.7 2.7 0 0 0-1.857.88l-7.645 8.507c-.99 1.103-.9 2.8.204 3.791l.006.006c.59.53 1.355.538 4.11.457H36.12a4.176 4.176 0 1 0 0-8.345H20.679z");
}
</style><path class="rh3tup__h"/>`,
		"fallback": "arcticons:mi-mover",
	});
}

export default Component;
