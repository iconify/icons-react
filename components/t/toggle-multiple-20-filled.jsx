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
		"content": `<style>.t0liimblm {
  fill: currentColor;
  d: path("M3 5.5A3.5 3.5 0 0 1 6.5 2h7a3.5 3.5 0 1 1 0 7h-7A3.5 3.5 0 0 1 3 5.5m5 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M6.5 11a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3");
}
</style><path class="t0liimblm"/>`,
		"fallback": "fluent:toggle-multiple-20-filled",
	});
}

export default Component;
