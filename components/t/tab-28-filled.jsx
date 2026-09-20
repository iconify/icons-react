import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fhyj1vb1s {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h15.5A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75zM6.25 5C5.56 5 5 5.56 5 6.25v15.5c0 .69.56 1.25 1.25 1.25h15.5c.69 0 1.25-.56 1.25-1.25V6.25C23 5.56 22.44 5 21.75 5z");
}
</style><path class="fhyj1vb1s"/>`,
		"fallback": "fluent:tab-28-filled",
	});
}

export default Component;
