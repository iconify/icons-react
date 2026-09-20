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
		"content": `<style>.gy2wt7b6g {
  fill: currentColor;
  d: path("m7.5 17l-1.4-1.4L8.675 13l-2.6-2.6L7.5 9l4 4zm4.5 0v-2h6v2zM2 20V4h11.075q-.05.25-.062.488T13 5q0 .825.213 1.588T13.8 8H4v10h16v-7.075q.55-.1 1.05-.275t.95-.45V20zM18 9V6h-3V4h3V1h2v3h3v2h-3v3z");
}
</style><path class="gy2wt7b6g"/>`,
		"fallback": "material-symbols:terminal-add-outline-sharp",
	});
}

export default Component;
