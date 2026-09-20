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
		"content": `<style>.iuq7eubdi {
  fill: currentColor;
  d: path("M8.5 3H6a3 3 0 0 0-3 3v.5a.5.5 0 0 0 1 0V6a2 2 0 0 1 2-2h2.5a.5.5 0 0 0 0-1M3 14a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm10.5 3a.5.5 0 0 1 0-1h.5a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3zM17 8.5a.5.5 0 0 1-1 0V6a2 2 0 0 0-2-2h-2.5a.5.5 0 0 1 0-1H14a3 3 0 0 1 3 3z");
}
</style><path class="iuq7eubdi"/>`,
		"fallback": "fluent:resize-20-filled",
	});
}

export default Component;
