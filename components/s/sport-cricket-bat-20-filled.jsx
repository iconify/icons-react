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
		"content": `<style>.myhyqybmy {
  fill: currentColor;
  d: path("M14.23 7.936c-.15.237-.232.514-.232.8v1.388l-.01.197a2 2 0 0 1-.576 1.217l-5.878 5.878a2 2 0 0 1-2.828 0l-2.12-2.12a2 2 0 0 1 0-2.829l5.88-5.88A2 2 0 0 1 9.88 6h1.37a1.5 1.5 0 0 0 .806-.238zm1.2-5.496a1.5 1.5 0 0 1 2.122 2.12L14.91 7.203l-2.12-2.12z");
}
</style><path class="myhyqybmy"/>`,
		"fallback": "fluent:sport-cricket-bat-20-filled",
	});
}

export default Component;
