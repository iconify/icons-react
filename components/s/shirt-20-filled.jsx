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
		"content": `<style>.hhbp_1prs {
  fill: currentColor;
  d: path("M7.417 3.007a.5.5 0 0 1 .568.372C8.127 3.946 8.735 5 10 5s1.873-1.054 2.015-1.621a.5.5 0 0 1 .67-.343l4.627 1.85a1 1 0 0 1 .615 1.093l-.364 2.185a1 1 0 0 1-.987.836H15v7.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V9H3.424a1 1 0 0 1-.986-.836l-.365-2.185a1 1 0 0 1 .615-1.092l4.626-1.85z");
}
</style><path class="hhbp_1prs"/>`,
		"fallback": "fluent:shirt-20-filled",
	});
}

export default Component;
