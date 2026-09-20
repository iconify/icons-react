import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yevjyvbtr {
  fill: currentColor;
  d: path("M16.124 1.116c-.884-.247-1.58.38-1.82.988l-.26.66c-2.006 5.09-3.837 9.74-8.612 12.157c-1.101.558-1.868 1.765-1.648 3.086l.416 2.496a3.75 3.75 0 0 0 2.669 2.99l7.69 2.196a6.75 6.75 0 0 0 8.469-5.146l1.228-6.046A3.75 3.75 0 0 0 20.58 10h-2.167c.345-1.503.504-3.217.346-4.73c-.184-1.77-.858-3.659-2.636-4.154");
}
</style><path class="yevjyvbtr"/>`,
		"fallback": "fluent:thumb-like-28-filled",
	});
}

export default Component;
