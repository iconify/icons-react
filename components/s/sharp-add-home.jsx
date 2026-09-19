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
		"content": `<style>.a4tj93cqy {
  fill: currentColor;
  d: path("M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z");
}

.v09tqpala {
  fill: currentColor;
  d: path("M18 11c.7 0 1.37.1 2 .29V9l-8-6l-8 6v12h7.68A6.995 6.995 0 0 1 18 11");
}
</style><path class="v09tqpala"/><path class="a4tj93cqy"/>`,
		"fallback": "ic:sharp-add-home",
	});
}

export default Component;
