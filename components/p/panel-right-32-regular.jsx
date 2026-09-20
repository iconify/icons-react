import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sz6ph22qa {
  fill: currentColor;
  d: path("M20 6v20H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6zm2 0h3.5A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5H22zm8 2.5A4.5 4.5 0 0 0 25.5 4h-19A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5z");
}
</style><path class="sz6ph22qa"/>`,
		"fallback": "fluent:panel-right-32-regular",
	});
}

export default Component;
