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
		"content": `<style>.t30w2-bwc {
  fill: currentColor;
  d: path("M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 10A1.5 1.5 0 0 1 3.5 13h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 14.5M3 8a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2z");
}
</style><path class="t30w2-bwc"/>`,
		"fallback": "fluent:line-thickness-20-regular",
	});
}

export default Component;
