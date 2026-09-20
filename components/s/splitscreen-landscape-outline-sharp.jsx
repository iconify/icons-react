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
		"content": `<style>.fwn1t7kch {
  fill: currentColor;
  d: path("M13.192 15.616h4.424V8.385h-4.424zm-6.807 0h4.423V8.385H6.385zM3 19V5h18v14zm17-1V6H4v12zM4 6v12z");
}
</style><path class="fwn1t7kch"/>`,
		"fallback": "material-symbols-light:splitscreen-landscape-outline-sharp",
	});
}

export default Component;
