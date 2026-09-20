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
		"content": `<style>.rljokabaf {
  fill: currentColor;
  d: path("M4.28 2.22a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06zM16.25 3.5h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5m-12.5 10a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm12.5-3.5H3.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5");
}
</style><path class="rljokabaf"/>`,
		"fallback": "fluent:text-first-line-20-filled",
	});
}

export default Component;
