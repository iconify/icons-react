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
		"content": `<style>.fzxjsqtbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 9.283l-9.566 29.434L24 9.283l-9.566 29.434L4.5 9.283");
}
</style><path class="fzxjsqtbl"/>`,
		"fallback": "arcticons:myalpha-wallet",
	});
}

export default Component;
