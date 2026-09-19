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
		"content": `<style>.bkzc8qb3g {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zm-2 12H4V8h16z");
}
</style><path class="bkzc8qb3g"/>`,
		"fallback": "ic:sharp-folder-open",
	});
}

export default Component;
