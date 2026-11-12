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
		"content": `<style>.ok3wqmhgt {
  fill: currentColor;
  d: path("M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7c0-.265.105-.52.293-.707l4-4A1 1 0 0 1 9 2h6c.265 0 .52.105.707.293l4 4A1 1 0 0 1 20 7ZM13 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m-5.842 6.221a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558m2.549 7.486l6-6a.999.999 0 1 0-1.414-1.414l-6 6a.999.999 0 1 0 1.414 1.414m6.072 1.135a2 2 0 1 0-1.558-3.684a2 2 0 0 0 1.558 3.684");
}
</style><path class="ok3wqmhgt"/>`,
		"fallback": "coolicons:tag-percent-fill",
	});
}

export default Component;
