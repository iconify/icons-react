import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pvihy7bko {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v3a2.5 2.5 0 0 0-3.62.674A3 3 0 0 0 8 7c-.97 0-1.832.46-2.38 1.174A2.5 2.5 0 0 0 2 7.5zm8 5.5a2 2 0 1 0-4 0v4h4zm1 4h1.25A1.75 1.75 0 0 0 14 12.25V9.5a1.5 1.5 0 0 0-3 0zm-6 0H3.75A1.75 1.75 0 0 1 2 12.25V9.5a1.5 1.5 0 1 1 3 0z");
}
</style><path class="pvihy7bko"/>`,
		"fallback": "fluent:seat-16-filled",
	});
}

export default Component;
