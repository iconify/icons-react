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
		"content": `<style>.vw8m6y3kh {
  fill: currentColor;
  d: path("M13 20v-7.6l-5-5v2.25H6V4h5.65v2H9.4l5.025 5.025q.275.275.425.638t.15.762V20z");
}
</style><path class="vw8m6y3kh"/>`,
		"fallback": "material-symbols:turn-slight-left-outline",
	});
}

export default Component;
