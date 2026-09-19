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
		"content": `<style>.a6as2zbqa {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-7 14h-2V9h-2V7h4z");
}
</style><path class="a6as2zbqa"/>`,
		"fallback": "ic:sharp-looks-one",
	});
}

export default Component;
