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
		"content": `<style>.kshy1fbnb {
  fill: currentColor;
  d: path("M3 6a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1m6.58 0a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M16 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M3 10a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1m6.58 0a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M16 10a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M3 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m6.58 0a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M16 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M3 18a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m6.58 0a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M16 18a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1");
}
</style><path class="kshy1fbnb"/>`,
		"fallback": "fluent:text-column-three-24-filled",
	});
}

export default Component;
