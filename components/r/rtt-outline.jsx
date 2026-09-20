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
		"content": `<style>.mvb0chy3o {
  fill: currentColor;
  d: path("m9.125 21l.4-2.55h2.325l2.05-12.9h-2.5l-.725 4.5h-2.65L9.15 3h12.975L21 10.05h-2.65l.7-4.5h-2.5l-2.05 12.9h2.325l-.4 2.55zM3.75 7l.325-2h3.75L7.5 7zm-.625 4l.325-2H7.2l-.325 2zm-1.25 8l.3-2h6.25l-.3 2zm.625-4l.325-2h6.25l-.325 2z");
}
</style><path class="mvb0chy3o"/>`,
		"fallback": "material-symbols:rtt-outline",
	});
}

export default Component;
