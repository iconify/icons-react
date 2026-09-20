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
		"content": `<style>.yj5s94btc {
  fill: currentColor;
  d: path("M7 19v-8q0-.825.588-1.412T9 9h8.2l-.9-.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l.9-.9H9v8q0 .425-.288.713T8 20t-.712-.288T7 19");
}
</style><path class="yj5s94btc"/>`,
		"fallback": "material-symbols:turn-right-rounded",
	});
}

export default Component;
