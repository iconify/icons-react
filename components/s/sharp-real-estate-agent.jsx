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
		"content": `<style>.yw9v5wbuw {
  fill: currentColor;
  d: path("M1 22h4V11H1zM14 1.5l-7 5V9h2l10 4v2h2V6.5zm-.5 8.5h-1V9h1zm0-2h-1V7h1zm2 2h-1V9h1zm0-2h-1V7h1zM22 19l-8 3l-7-1.98V11h1.97L17 14v2h-4l-1.76-.68l-.33.94L13 17h9z");
}
</style><path class="yw9v5wbuw"/>`,
		"fallback": "ic:sharp-real-estate-agent",
	});
}

export default Component;
