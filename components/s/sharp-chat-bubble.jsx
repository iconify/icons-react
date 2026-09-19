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
		"content": `<style>.ykjv5hbpp {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16z");
}
</style><path class="ykjv5hbpp"/>`,
		"fallback": "ic:sharp-chat-bubble",
	});
}

export default Component;
