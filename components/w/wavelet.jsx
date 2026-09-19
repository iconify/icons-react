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
		"content": `<style>.c5ipmyxtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 23.268a20.6 20.6 0 0 1-4.592-4.725s-.865 21.363-5.857 21.363c-5.99 0-2.862-31.812-9.051-31.812s-3.061 31.812-9.051 31.812c-4.992 0-5.857-21.363-5.857-21.363A20.6 20.6 0 0 1 4.5 23.268");
}
</style><path class="c5ipmyxtm"/>`,
		"fallback": "arcticons:wavelet",
	});
}

export default Component;
