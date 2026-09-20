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
		"content": `<style>.xiticcb2o {
  fill: currentColor;
  d: path("M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75zM17.75 4.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75zM4.5 8.5h15v2.75h-15zm0 4.25h15v2.75h-15zm0 4.25h15v.75a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z");
}
</style><path class="xiticcb2o"/>`,
		"fallback": "fluent:layout-row-four-24-regular",
	});
}

export default Component;
