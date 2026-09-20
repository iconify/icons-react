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
		"content": `<style>.yhk6f_b4g {
  fill: currentColor;
  d: path("M17 5.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75m-6 0a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 .75-.75m6 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75m-6 0a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 .75-.75m6 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75m-6 0a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 .75-.75m6 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75m-6 0a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 .75-.75");
}
</style><path class="yhk6f_b4g"/>`,
		"fallback": "fluent:text-column-two-right-20-filled",
	});
}

export default Component;
