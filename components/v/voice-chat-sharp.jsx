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
		"content": `<style>.yqy05tpek {
  fill: currentColor;
  d: path("M6.308 10.5h.884v-1h-.884zm2.5 2h.884v-5h-.884zm2.75 2h.884v-9h-.884zm2.75-2h.884v-5h-.884zm2.5-2h.884v-1h-.884zM3 20.077V3h18v14H6.077z");
}
</style><path class="yqy05tpek"/>`,
		"fallback": "material-symbols-light:voice-chat-sharp",
	});
}

export default Component;
