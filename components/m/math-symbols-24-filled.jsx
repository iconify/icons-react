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
		"content": `<style>.bxucj7bqv {
  fill: currentColor;
  d: path("M6.5 1.5a1 1 0 0 1 1 1V5h2.502a1 1 0 0 1 0 2H7.5v2.5a1 1 0 1 1-2 0V7H3.002a1 1 0 0 1 0-2H5.5V2.5a1 1 0 0 1 1-1M13.998 5a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2zM13 17.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m4.5-2a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m1.25 5.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M2.293 13.293a1 1 0 0 1 1.414 0L6.5 16.086l2.793-2.793a1 1 0 0 1 1.414 1.414L7.914 17.5l2.793 2.793a1 1 0 0 1-1.414 1.414L6.5 18.914l-2.793 2.793a1 1 0 0 1-1.414-1.414L5.086 17.5l-2.793-2.793a1 1 0 0 1 0-1.414");
}
</style><path class="bxucj7bqv"/>`,
		"fallback": "fluent:math-symbols-24-filled",
	});
}

export default Component;
