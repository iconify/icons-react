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
		"content": `<style>.sc1_uvbwu {
  fill: currentColor;
  d: path("M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l1.687 3.425a2.25 2.25 0 0 0-.678 4.223a2.25 2.25 0 0 0 0 4a2.25 2.25 0 0 0-.767 3.351l-6.168 3.241c-.99.52-2.148-.32-1.96-1.423l.901-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88zM14.5 16.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.747.747 0 0 1-.75-.75m0-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m0-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75");
}
</style><path class="sc1_uvbwu"/>`,
		"fallback": "fluent:star-line-horizontal-3-24-filled",
	});
}

export default Component;
