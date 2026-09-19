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
		"content": `<style>.zpvsqo9me {
  fill: currentColor;
  d: path("M22 7h-6V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H2v15h20zM10 5h4v2h-4zm1 13.5l-1-1l3-3l-3-3l1-1l4 4z");
}
</style><path class="zpvsqo9me"/>`,
		"fallback": "ic:sharp-next-week",
	});
}

export default Component;
