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
		"content": `<style>.pcz96vb-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.185 12.416l-7.003 7.002a5.683 5.683 0 0 0 0 8.038l.626.626a5.683 5.683 0 0 0 8.037 0l8.953-8.952a5.683 5.683 0 0 1 8.037 0h0a5.684 5.684 0 0 1 0 8.037L27.593 42.41a5.683 5.683 0 0 1-8.038 0L5.165 28.019a5.683 5.683 0 0 1 0-8.038l14.39-14.39a5.683 5.683 0 0 1 8.038 0l4.933 4.933");
}
</style><path class="pcz96vb-k"/>`,
		"fallback": "arcticons:swagbucks",
	});
}

export default Component;
