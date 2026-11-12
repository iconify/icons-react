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
		"content": `<style>.t5ujqlblx {
  fill: currentColor;
  d: path("M11 2v20h-1q-.14 0-.275-.038l-7-2A1 1 0 0 1 2 19V5c0-.446.296-.839.725-.962l7-2Q9.86 2 10 2Zm2 0h1q.14 0 .275.038l7 2c.429.123.725.516.725.962v14c0 .446-.296.839-.725.962l-7 2Q14.14 22 14 22h-1ZM6.01 6H6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="t5ujqlblx"/>`,
		"fallback": "coolicons:mobile-foldable-fill",
	});
}

export default Component;
